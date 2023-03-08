const Joi = require("joi");

class DocumentEngineModel {
  static creditNoteParameter() {
    return Joi.object({
      expires_in: Joi.number(),
    });
  }

  static invoiceParameter() {
    return Joi.object({
      document_type: Joi.string().allow(""),

      expires_in: Joi.number(),
    });
  }

  static ResponseGetInvoiceShipment() {
    return Joi.object({
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static getInvoiceByShipmentId400Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static getInvoiceByShipmentId500Response() {
    return Joi.object({
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow(""),
    });
  }

  static ReqBodyPresignedPOST() {
    return Joi.object({
      event: Joi.string().allow("").required(),

      media_type: Joi.array().items(Joi.string().allow("")).required(),

      expires_in: Joi.number(),
    });
  }

  static ResponsePresignedGETURL() {
    return Joi.object({
      success: Joi.boolean().required(),

      presigned_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      presigned_url: Joi.string().allow("").required(),
    });
  }

  static ErrorResponsePresignedUrl() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }
}
module.exports = DocumentEngineModel;
