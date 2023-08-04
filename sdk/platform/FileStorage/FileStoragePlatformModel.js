const Joi = require("joi");

class FileStorageModel {
  static Brand() {
    return Joi.object({
      logo: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
    });
  }
  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(FileStorageModel.DbRecord()).required(),
      page: FileStorageModel.Page().required(),
    });
  }
  static BulkRequest() {
    return Joi.object({
      destination: FileStorageModel.Destination().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static BulkUploadFailFileResponseItems() {
    return Joi.object({
      error: Joi.string().allow(""),
      file: FileStorageModel.File(),
      stage: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static BulkUploadFailResponse() {
    return Joi.object({
      files: Joi.array().items(Joi.any()).required(),
      status: FileStorageModel.Status().required(),
    });
  }
  static BulkUploadResponse() {
    return Joi.object({
      task: FileStorageModel.CopyFileTask().required(),
      tracking_url: Joi.string().allow("").required(),
    });
  }
  static BulkUploadSyncMode() {
    return Joi.object({
      files: Joi.array().items(FileStorageModel.FilesSuccess()),
      status: FileStorageModel.Status().required(),
    });
  }
  static CDN() {
    return Joi.object({
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
  static companyDetail() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      cin: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      gstin: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      pan: Joi.string().allow("").required(),
      phone_no: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      website_url: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }
  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStorageModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: FileStorageModel.Upload().required(),
    });
  }
  static CopyFiles() {
    return Joi.object({
      destination: FileStorageModel.DestinationNamespace().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static CopyFilesWithRewrite() {
    return Joi.object({
      destination: FileStorageModel.DestinationBasepath().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static CopyFileTask() {
    return Joi.object({
      attempts_made: Joi.number().required(),
      data: FileStorageModel.BulkRequest().required(),
      delay: Joi.number().required(),
      finished_on: Joi.number().required(),
      id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      opts: FileStorageModel.Opts().required(),
      processed_on: Joi.number().required(),
      progress: Joi.number().required(),
      stacktrace: Joi.array().items(Joi.string().allow("")),
      timestamp: Joi.number().required(),
    });
  }
  static customerBillingDetail() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      phone_no: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }
  static customerShippingDetail() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      phone_no: Joi.string().allow("").required(),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }
  static DbRecord() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStorageModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow(""),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      upload: FileStorageModel.Upload().required(),
    });
  }
  static Destination() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      rewrite: Joi.string().allow("").required(),
    });
  }
  static DestinationBasepath() {
    return Joi.object({
      basepath: Joi.string().allow("").required(),
      rewrite: Joi.string().allow("").required(),
    });
  }
  static DestinationNamespace() {
    return Joi.object({
      namespace: Joi.string().allow(""),
    });
  }
  static DummyTemplateDataItems() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      payload: FileStorageModel.DummyTemplateDataPayload().required(),
      pdf_type_id: Joi.number(),
    });
  }
  static DummyTemplateDataPayload() {
    return Joi.object({
      amount_paid: Joi.number(),
      amount_to_be_collected: Joi.number().required(),
      awb_number_barcode: Joi.string().allow(""),
      company_detail: FileStorageModel.companyDetail(),
      currency_code: Joi.string().allow("").required(),
      customer_billing_detail: FileStorageModel.customerBillingDetail(),
      customer_shipping_detail: FileStorageModel.customerShippingDetail(),
      declaration_texts: Joi.array().items(Joi.string().allow("")),
      delivery_partner_detail: Joi.any(),
      disclaimer: Joi.string().allow(""),
      image: FileStorageModel.DummyTemplateDataPayloadImage(),
      invoice_detail: Joi.any(),
      is_self_pickup: Joi.boolean(),
      is_self_ship: Joi.boolean(),
      is_test: Joi.boolean(),
      meta: Joi.any(),
      payments: Joi.array().items(FileStorageModel.payments()),
      product_table: FileStorageModel.productTable(),
      registered_company_detail: FileStorageModel.registeredCompanyDetail(),
      return_detail: FileStorageModel.returnDetail(),
      shipment_id: Joi.string().allow("").required(),
      shipment_id_barcode: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      store_detail: FileStorageModel.storeDetail(),
      tax_table: FileStorageModel.taxTable(),
      upi_qrcode: Joi.string().allow(""),
    });
  }
  static DummyTemplateDataPayloadImage() {
    return Joi.object({
      sales_channel_logo: Joi.string().allow("").required(),
    });
  }
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
  static File() {
    return Joi.object({
      src: FileStorageModel.FileSrc().required(),
    });
  }
  static FileSrc() {
    return Joi.object({
      method: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      url: Joi.string().allow("").required(),
    });
  }
  static FilesSuccess() {
    return Joi.object({
      file: FileStorageModel.File(),
      success: Joi.boolean().required(),
    });
  }
  static invoiceDetail() {
    return Joi.object({
      channel_order_id: Joi.string().allow(""),
      external_order_id: Joi.string().allow(""),
      invoice_date: Joi.string().allow("").required(),
      invoice_id: Joi.string().allow("").required(),
      irn: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
    });
  }
  static InvoiceTypesResponse() {
    return Joi.object({
      __v: Joi.number().required(),
      _id: Joi.string().allow("").required(),
      format: Joi.array().items(Joi.string().allow("")).required(),
      name: Joi.string().allow("").required(),
      pdf_type_id: Joi.number().required(),
      schema: Joi.any().required(),
      visibility: Joi.boolean().required(),
    });
  }
  static Opts() {
    return Joi.object({
      attempts: Joi.number(),
      delay: Joi.number(),
      timestamp: Joi.number(),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static payments() {
    return Joi.object({
      amount: Joi.number(),
      date: Joi.string().allow(""),
      payment_type: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
    });
  }
  static pdfConfig() {
    return Joi.object({
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }
  static pdfRender() {
    return Joi.object({
      format: Joi.string().allow(""),
      payload: Joi.array().items(FileStorageModel.DummyTemplateDataItems()),
      template: Joi.string().allow(""),
    });
  }
  static Products() {
    return Joi.object({
      brand: FileStorageModel.Brand(),
      discount: Joi.number(),
      hsn_code: Joi.string().allow(""),
      item_code: Joi.string().allow("").required(),
      mrp: Joi.number(),
      name: Joi.string().allow("").required(),
      seller_identifier: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      tax: Joi.any(),
      taxable_amount: Joi.number(),
      total: Joi.number(),
      total_taxable_amount: Joi.number(),
      total_units: Joi.number(),
    });
  }
  static productTable() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),
      delivery_charge_text: Joi.string().allow(""),
      delivery_charges: Joi.string().allow(""),
      fynd_discounts: Joi.string().allow(""),
      grand_total: Joi.number(),
      products: Joi.array().items(FileStorageModel.Products()).required(),
      total_in_words: Joi.string().allow(""),
      total_items: Joi.number(),
    });
  }
  static registeredCompanyDetail() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }
  static returnDetail() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }
  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(FileStorageModel.Urls()).required(),
    });
  }
  static StartRequest() {
    return Joi.object({
      content_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      params: Joi.any(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }
  static StartResponse() {
    return Joi.object({
      cdn: FileStorageModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: FileStorageModel.Upload().required(),
    });
  }
  static Status() {
    return Joi.object({
      failed: Joi.number().required(),
      result: Joi.string().allow(""),
      succeeded: Joi.number().required(),
      total: Joi.number().required(),
    });
  }
  static storeDetail() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").required(),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      store_name: Joi.string().allow("").required(),
      zip_code: Joi.string().allow(""),
    });
  }
  static TaxeItems() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),
      tax: Joi.any().required(),
      total: Joi.number(),
    });
  }
  static taxTable() {
    return Joi.object({
      grand_total: Joi.number().required(),
      tax_in_words: Joi.string().allow(""),
      taxes: Joi.array().items(FileStorageModel.TaxeItems()).required(),
    });
  }
  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),
      url: Joi.string().allow("").required(),
    });
  }
  static Urls() {
    return Joi.object({
      expiry: Joi.number().required(),
      signed_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
}
module.exports = FileStorageModel;
