const Joi = require("joi");

class DocumentEngineModel {
  static BadRequestResponseGenerateBulk() {
    return Joi.object({
      error_message: Joi.array()
        .items(DocumentEngineModel.BadRequestResponseGenerateBulkItem())
        .required(),
      success: Joi.boolean().required(),
    });
  }
  static BadRequestResponseGenerateBulkItem() {
    return Joi.object({
      data_path: Joi.string().allow(""),
      keyword: Joi.string().allow(""),
      message: Joi.string().allow(""),
      parameters: DocumentEngineModel.BadRequestResponseGenerateBulkItemParameters(),
      schema_path: Joi.string().allow(""),
    });
  }
  static BadRequestResponseGenerateBulkItemParameters() {
    return Joi.object({
      missing_property: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static BadRequestResponseGenerateBulkUrl() {
    return Joi.object({
      exception: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static BoxDetails() {
    return Joi.object({
      box_id: Joi.string().allow("").required(),
      dimension: Joi.string().allow("").required(),
      package_count: Joi.string().allow("").required(),
      total_quantity: Joi.string().allow("").required(),
      weight: Joi.string().allow("").required(),
    });
  }
  static BulkListBadRequestResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static BulkListFailedResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static BulkPresignedSuccessResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      expires_in: Joi.number(),
      presigned_type: Joi.string().allow(""),
      presigned_url: Joi.string().allow("").required(),
      success: Joi.string().allow("").required(),
    });
  }
  static DocumentType() {
    return Joi.object({
      invoice: Joi.string().allow("").required(),
      label: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkBoxLabel() {
    return Joi.object({
      box_details: Joi.array()
        .items(DocumentEngineModel.BoxDetails())
        .required(),
      label_type: Joi.string().allow("").required(),
      seller_name: Joi.string().allow("").required(),
      stock_transfer_id: Joi.string().allow("").required(),
      template_id: Joi.number().required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkInvoiceLabelShipment() {
    return Joi.object({
      document_type: Joi.string().allow("").required(),
      from_date: Joi.string().allow("").required(),
      shipment_ids: Joi.array().items(Joi.string().allow("")),
      store_id: Joi.number().required(),
      to_date: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkInvoiceOrLabelUrl() {
    return Joi.object({
      batch_id: Joi.number().required(),
      document_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkPackageLabel() {
    return Joi.object({
      item_details: Joi.array()
        .items(DocumentEngineModel.PackageItemDetails())
        .required(),
      label_type: Joi.string().allow("").required(),
      seller_name: Joi.string().allow("").required(),
      stock_transfer_id: Joi.string().allow("").required(),
      template_id: Joi.number().required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkShipment() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      document_type: Joi.string().allow("").required(),
      store_code: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkShipmentLabel() {
    return Joi.object({
      label_type: Joi.string().allow("").required(),
      shipments: Joi.array()
        .items(DocumentEngineModel.ShipmentDetails())
        .required(),
      template_id: Joi.number().required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GenerateBulkUrl() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      document_type: Joi.string().allow("").required(),
      expires_in: Joi.number(),
    });
  }
  static GenerateBulkUrlSuccessResponse() {
    return Joi.object({
      expires_in: Joi.number().required(),
      presigned_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
  static GenerateManifest() {
    return Joi.object({
      from_date: Joi.string().allow("").required(),
      shipment_ids: Joi.array().items(Joi.string().allow("")),
      store_id: Joi.number().required(),
      to_date: Joi.string().allow("").required(),
    });
  }
  static GenerateManifestUrlSuccessResponse() {
    return Joi.object({
      expires_in: Joi.number().required(),
      manifest_id: Joi.string().allow("").required(),
      presigned_type: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
  static GenerateNoc() {
    return Joi.object({
      fc_address: DocumentEngineModel.SellerAddress().required(),
      fc_gstin: Joi.string().allow("").required(),
      seller_address: DocumentEngineModel.SellerAddress().required(),
      seller_gstin: Joi.string().allow("").required(),
      seller_name: Joi.string().allow("").required(),
      template_id: Joi.number().required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GeneratePresignedManifestUrl() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
    });
  }
  static GetBulkStatusRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
    });
  }
  static InternalErrorResponseGenerateBulk() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static InternalErrorResponseGenerateBulkShipment() {
    return Joi.object({
      error: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static InternalErrorResponseGenerateBulkUrl() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static InvoiceLabelPresignedRequestBody() {
    return Joi.object({
      document_type: Joi.string().allow("").required(),
      entity_id: Joi.string().allow("").required(),
      expires_in: Joi.number(),
    });
  }
  static ManifestLink() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static ManifestListFailedResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static PackageDetails() {
    return Joi.object({
      dimension: Joi.string().allow("").required(),
      item_quantity: Joi.string().allow("").required(),
      package_id: Joi.string().allow("").required(),
      package_type: Joi.string().allow("").required(),
      packaging_type: Joi.string().allow("").required(),
      weight: Joi.string().allow("").required(),
    });
  }
  static PackageItemDetails() {
    return Joi.object({
      best_before_date: Joi.string().allow("").required(),
      country_of_origin: Joi.string().allow("").required(),
      ean: Joi.string().allow("").required(),
      item_name: Joi.string().allow("").required(),
      jio_code: Joi.string().allow("").required(),
      mrp: Joi.string().allow("").required(),
      package_details: Joi.array()
        .items(DocumentEngineModel.PackageDetails())
        .required(),
    });
  }
  static SellerAddress() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
  static ShipmentDetails() {
    return Joi.object({
      appointment_no: Joi.string().allow("").required(),
      gstin_number: Joi.string().allow("").required(),
      item_qty: Joi.string().allow("").required(),
      no_of_boxes: Joi.string().allow("").required(),
      seller_address: DocumentEngineModel.SellerAddress().required(),
      seller_name: Joi.string().allow("").required(),
      shipment_no: Joi.string().allow("").required(),
      shipping_address: DocumentEngineModel.ShippingToAddress().required(),
      shipping_to: Joi.string().allow("").required(),
      total_sku: Joi.string().allow("").required(),
    });
  }
  static ShippingToAddress() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
  static SignedBadRequestResponse() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SignedFailedResponse() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SignedSuccessResponse() {
    return Joi.object({
      expires_in: Joi.number(),
      uid: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static StatusBadRequestResponse() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static StatusFailedResponse() {
    return Joi.object({
      error_message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static StatusSuccessResponse() {
    return Joi.object({
      status: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SuccessResponseBulkStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      trace_id: Joi.string().allow(""),
    });
  }
  static SuccessResponseGenerateBulk() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static SuccessResponseGenerateBulkShipment() {
    return Joi.object({
      job_id: Joi.number().required(),
      success: Joi.boolean().required(),
      trace_id: Joi.string().allow(""),
    });
  }
}
module.exports = DocumentEngineModel;
