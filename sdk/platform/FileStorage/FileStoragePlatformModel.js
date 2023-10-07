const Joi = require("joi");

/**
 * @typedef AwbNumberLabelBarcodeGenerator
 * @property {KwargsAwbNumber} [kwargs]
 * @property {string} [method]
 */

/**
 * @typedef Brand
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef CDN
 * @property {string} absolute_url
 * @property {string} relative_url
 * @property {string} url
 */

/**
 * @typedef Cgst
 * @property {number} [percent]
 * @property {number} [value]
 */

/**
 * @typedef CompanyDetail
 * @property {string} [address]
 * @property {string} [cin]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gstin]
 * @property {string} [name]
 * @property {string} [pan]
 * @property {string} [phone_no]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [website_url]
 * @property {number} [zip_code]
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {CDN} cdn
 * @property {number} company_id
 * @property {string} content_type
 * @property {CreatedBy} [created_by]
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {Upload} upload
 */

/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Rates} [rates]
 * @property {number} [timestamp]
 */

/**
 * @typedef CopyFiles
 * @property {DestinationNamespace} destination
 * @property {string[]} [urls]
 */

/**
 * @typedef CreatedBy
 * @property {string} [username]
 */

/**
 * @typedef CustomerBillingDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [zip_code]
 */

/**
 * @typedef CustomerShippingDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [zip_code]
 */

/**
 * @typedef DeliveryPartnerDetail
 * @property {string} [awb_number]
 * @property {string} [awb_number_barcode]
 * @property {string} [eway_bill_number]
 * @property {string} [name]
 */

/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */

/**
 * @typedef DigitalsignatureGenerator
 * @property {Kwargs} [kwargs]
 * @property {string} [method]
 */

/**
 * @typedef Document
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [country_code]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */

/**
 * @typedef DummyTemplateData
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {DummyTemplateDataPayload} payload
 * @property {number} [pdf_type_id]
 */

/**
 * @typedef DummyTemplateDataItems
 * @property {DummyTemplateData[]} data
 * @property {boolean} success
 */

/**
 * @typedef DummyTemplateDataPayload
 * @property {number} [amount_paid]
 * @property {number} [amount_to_be_collected]
 * @property {string} [app_domain_name]
 * @property {string} [awb_number_barcode]
 * @property {string} [brand_logo]
 * @property {CompanyDetail} [company_detail]
 * @property {ConversionRate} [conversion_rate]
 * @property {string} [currency_code]
 * @property {CustomerBillingDetail} [customer_billing_detail]
 * @property {CustomerShippingDetail} [customer_shipping_detail]
 * @property {string[]} [declaration_texts]
 * @property {DeliveryPartnerDetail} [delivery_partner_detail]
 * @property {string} [digitalsignature]
 * @property {string} [disclaimer]
 * @property {Image} [image]
 * @property {InvoiceDetail} [invoice_detail]
 * @property {boolean} [is_international]
 * @property {boolean} [is_self_pickup]
 * @property {boolean} [is_self_ship]
 * @property {Meta} [meta]
 * @property {string} [mode]
 * @property {PaymentData[]} [payments]
 * @property {string} [platform_name]
 * @property {ProductTable} [product_table]
 * @property {RegisteredCompanyDetail} [registered_company_detail]
 * @property {ReturnDetail} [return_detail]
 * @property {string} [shipment_id]
 * @property {string} [shipment_id_barcode]
 * @property {string} [signed_qrcode]
 * @property {StoreDetail} [store_detail]
 * @property {TaxTable} [tax_table]
 * @property {number} [total_items]
 * @property {string} [uid]
 * @property {string} [upi_qrcode]
 * @property {Object[]} [waybills]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef Igst
 * @property {number} [percent]
 * @property {number} [value]
 */

/**
 * @typedef Image
 * @property {string} [sales_channel_logo]
 */

/**
 * @typedef Inr
 * @property {string} [name]
 * @property {string} [sub_unit]
 * @property {string} [symbol]
 * @property {number} [value]
 */

/**
 * @typedef InvoiceDetail
 * @property {string} [external_order_id]
 * @property {string} [invoice_date]
 * @property {string} [invoice_id]
 * @property {string} [irn]
 * @property {string} [shipment_id]
 * @property {string} [signed_qrcode]
 * @property {string} [upi_qrcode]
 */

/**
 * @typedef InvoiceTypesDataResponse
 * @property {number} __v
 * @property {string} _id
 * @property {string} [country_code]
 * @property {string[]} format
 * @property {string} name
 * @property {number} pdf_type_id
 * @property {boolean} [status]
 * @property {boolean} visibility
 */

/**
 * @typedef InvoiceTypesResponse
 * @property {InvoiceTypesDataResponse[]} data
 * @property {boolean} success
 */

/**
 * @typedef ItemsProductTable
 * @property {Brand} [brand]
 * @property {number} [discount]
 * @property {string} [hsn_code]
 * @property {string} [item_code]
 * @property {number} [mrp]
 * @property {string} [name]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {Tax} [tax]
 * @property {number} [taxable_amount]
 * @property {number} [total]
 * @property {number} [total_taxable_amount]
 * @property {number} [total_units]
 */

/**
 * @typedef Kwargs
 * @property {string} [value]
 */

/**
 * @typedef KwargsAwbNumber
 * @property {Object[]} [value]
 */

/**
 * @typedef KwargsUpiQrcode
 * @property {string} [qr_data]
 * @property {string} [qr_url]
 */

/**
 * @typedef Meta
 * @property {MetaProperty} [generator]
 */

/**
 * @typedef MetaProperty
 * @property {AwbNumberLabelBarcodeGenerator} [awb_number_label_barcode_generator]
 * @property {DigitalsignatureGenerator} [digitalsignature_generator]
 * @property {ShipmentIdBarcodeGenerator} [shipment_id_barcode_generator]
 * @property {SignedQrcodeGenerator} [signed_qrcode_generator]
 * @property {UpiQrcodeGenerator} [upi_qrcode_generator]
 */

/**
 * @typedef Params
 * @property {string} [subpath] - The subpath for the file.
 */

/**
 * @typedef PaymentData
 * @property {number} [amount]
 * @property {string} [date]
 * @property {string} [payment_type]
 * @property {string} [transaction_id]
 */

/**
 * @typedef PaymentReceiptCustomerDetails
 * @property {string} [email_id]
 * @property {string} [first_name]
 * @property {string} [id]
 * @property {string} [last_name]
 * @property {string} [mobile_number]
 */

/**
 * @typedef PaymentReceiptFormat
 * @property {string[]} [payment_receipt]
 */

/**
 * @typedef PaymentReceiptMeta
 * @property {string} [action]
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {number} [created_timestamp]
 * @property {Object} [event]
 * @property {Object} [event_trace_info]
 * @property {PaymentReceiptFormat} [format]
 * @property {string} [job_type]
 * @property {string} [organizaton_id]
 * @property {PaymentReceiptService} [service]
 * @property {string} [trace]
 * @property {string[]} [trace_id]
 */

/**
 * @typedef PaymentReceiptOrderDetails
 * @property {number} [final_amount]
 * @property {string} [final_amount_in_words]
 * @property {string} [jiomart_order_id]
 * @property {string} [order_created_date]
 * @property {string} [order_created_time]
 * @property {string} [prm_id]
 * @property {string} [receipt_no]
 * @property {PaymentReceiptTaxes} [taxes]
 * @property {number} [total_items]
 */

/**
 * @typedef PaymentReceiptPayload
 * @property {PaymentReceiptCustomerDetails} [customer_detail]
 * @property {PaymentReceiptOrderDetails} [order_detail]
 * @property {PaymentReceiptPayments[]} [payments]
 * @property {string} [uid]
 */

/**
 * @typedef PaymentReceiptPayments
 * @property {string} [payment_desc]
 * @property {string} [txn_date]
 */

/**
 * @typedef PaymentReceiptRequestBody
 * @property {PaymentReceiptMeta} [meta]
 * @property {PaymentReceiptPayload} [payload]
 */

/**
 * @typedef PaymentReceiptService
 * @property {string} [name]
 */

/**
 * @typedef PaymentReceiptTaxes
 * @property {string} [gstin]
 * @property {string} [pancard]
 */

/**
 * @typedef PdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {number} [pdf_type_id]
 * @property {string} [template] - This is html template string
 */

/**
 * @typedef PdfConfigSaveSuccess
 * @property {PdfConfigSaveSuccessData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef PdfConfigSaveSuccessData
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */

/**
 * @typedef PdfConfigSuccess
 * @property {PdfConfigSuccessData[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef PdfConfigSuccessData
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [country_code]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */

/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {Document[]} [data]
 * @property {boolean} [success] - Indicates if the request was successful.
 */

/**
 * @typedef ProductTable
 * @property {number} [cod_charges]
 * @property {string} [delivery_charge_text]
 * @property {number} [delivery_charges]
 * @property {number} [fynd_discounts]
 * @property {number} [grand_total]
 * @property {ItemsProductTable[]} [products]
 * @property {string} [total_in_words]
 * @property {number} [total_items]
 */

/**
 * @typedef Rates
 * @property {Inr} [inr]
 * @property {Usd} [usd]
 */

/**
 * @typedef RegisteredCompanyDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {number} [zip_code]
 */

/**
 * @typedef ReturnDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [zip_code]
 */

/**
 * @typedef Sgst
 * @property {number} [percent]
 * @property {number} [value]
 */

/**
 * @typedef ShipmentIdBarcodeGenerator
 * @property {Kwargs} [kwargs]
 * @property {string} [method]
 */

/**
 * @typedef SignedQrcodeGenerator
 * @property {Kwargs} [kwargs]
 * @property {string} [method]
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef StartRequest
 * @property {string} content_type
 * @property {string} file_name
 * @property {Params} [params]
 * @property {number} size
 * @property {string[]} [tags]
 */

/**
 * @typedef StartResponse
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Upload} upload
 */

/**
 * @typedef StoreDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [gstin]
 * @property {string} [state]
 * @property {string} [state_code]
 * @property {string} [store_name]
 * @property {string} [zip_code]
 */

/**
 * @typedef Tax
 * @property {Cgst} [cgst]
 * @property {Igst} [igst]
 * @property {Sgst} [sgst]
 */

/**
 * @typedef Taxes
 * @property {string} [hsn_code]
 * @property {Tax} [tax]
 * @property {number} [total_tax_value]
 */

/**
 * @typedef TaxTable
 * @property {string} [tax_in_words]
 * @property {Taxes[]} [taxes]
 * @property {number} [total_tax]
 */

/**
 * @typedef UpiQrcodeGenerator
 * @property {KwargsUpiQrcode} [kwargs]
 * @property {string} [method]
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef Urls
 * @property {number} expiry
 * @property {string} signed_url
 * @property {string} url
 */

/**
 * @typedef Usd
 * @property {string} [name]
 * @property {string} [sub_unit]
 * @property {string} [symbol]
 * @property {number} [value]
 */

class FileStoragePlatformModel {
  /** @returns {AwbNumberLabelBarcodeGenerator} */
  static AwbNumberLabelBarcodeGenerator() {
    return Joi.object({
      kwargs: FileStoragePlatformModel.KwargsAwbNumber(),
      method: Joi.string().allow(""),
    });
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CDN} */
  static CDN() {
    return Joi.object({
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Cgst} */
  static Cgst() {
    return Joi.object({
      percent: Joi.number(),
      value: Joi.number(),
    });
  }

  /** @returns {CompanyDetail} */
  static CompanyDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      cin: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      email: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pan: Joi.string().allow("").allow(null),
      phone_no: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      website_url: Joi.string().allow(""),
      zip_code: Joi.number(),
    });
  }

  /** @returns {CompleteResponse} */
  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      company_id: Joi.number().required(),
      content_type: Joi.string().allow("").required(),
      created_by: FileStoragePlatformModel.CreatedBy(),
      created_on: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {ConversionRate} */
  static ConversionRate() {
    return Joi.object({
      base: Joi.string().allow(""),
      rates: FileStoragePlatformModel.Rates(),
      timestamp: Joi.number(),
    });
  }

  /** @returns {CopyFiles} */
  static CopyFiles() {
    return Joi.object({
      destination: FileStoragePlatformModel.DestinationNamespace().required(),
      urls: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      username: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerBillingDetail} */
  static CustomerBillingDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      phone_no: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerShippingDetail} */
  static CustomerShippingDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      phone_no: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }

  /** @returns {DeliveryPartnerDetail} */
  static DeliveryPartnerDetail() {
    return Joi.object({
      awb_number: Joi.string().allow(""),
      awb_number_barcode: Joi.string().allow(""),
      eway_bill_number: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {DestinationNamespace} */
  static DestinationNamespace() {
    return Joi.object({
      namespace: Joi.string().allow(""),
    });
  }

  /** @returns {DigitalsignatureGenerator} */
  static DigitalsignatureGenerator() {
    return Joi.object({
      kwargs: FileStoragePlatformModel.Kwargs(),
      method: Joi.string().allow(""),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {DummyTemplateData} */
  static DummyTemplateData() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      payload: FileStoragePlatformModel.DummyTemplateDataPayload().required(),
      pdf_type_id: Joi.number(),
    });
  }

  /** @returns {DummyTemplateDataItems} */
  static DummyTemplateDataItems() {
    return Joi.object({
      data: Joi.array()
        .items(FileStoragePlatformModel.DummyTemplateData())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {DummyTemplateDataPayload} */
  static DummyTemplateDataPayload() {
    return Joi.object({
      amount_paid: Joi.number(),
      amount_to_be_collected: Joi.number(),
      app_domain_name: Joi.string().allow(""),
      awb_number_barcode: Joi.string().allow(""),
      brand_logo: Joi.string().allow(""),
      company_detail: FileStoragePlatformModel.CompanyDetail(),
      conversion_rate: FileStoragePlatformModel.ConversionRate(),
      currency_code: Joi.string().allow(""),
      customer_billing_detail: FileStoragePlatformModel.CustomerBillingDetail(),
      customer_shipping_detail: FileStoragePlatformModel.CustomerShippingDetail(),
      declaration_texts: Joi.array().items(Joi.string().allow("")),
      delivery_partner_detail: FileStoragePlatformModel.DeliveryPartnerDetail(),
      digitalsignature: Joi.string().allow(""),
      disclaimer: Joi.string().allow(""),
      image: FileStoragePlatformModel.Image(),
      invoice_detail: FileStoragePlatformModel.InvoiceDetail(),
      is_international: Joi.boolean(),
      is_self_pickup: Joi.boolean(),
      is_self_ship: Joi.boolean(),
      meta: FileStoragePlatformModel.Meta(),
      mode: Joi.string().allow(""),
      payments: Joi.array().items(FileStoragePlatformModel.PaymentData()),
      platform_name: Joi.string().allow(""),
      product_table: FileStoragePlatformModel.ProductTable(),
      registered_company_detail: FileStoragePlatformModel.RegisteredCompanyDetail(),
      return_detail: FileStoragePlatformModel.ReturnDetail(),
      shipment_id: Joi.string().allow(""),
      shipment_id_barcode: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      store_detail: FileStoragePlatformModel.StoreDetail(),
      tax_table: FileStoragePlatformModel.TaxTable(),
      total_items: Joi.number(),
      uid: Joi.string().allow(""),
      upi_qrcode: Joi.string().allow(""),
      waybills: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {FailedResponse} */
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {Igst} */
  static Igst() {
    return Joi.object({
      percent: Joi.number(),
      value: Joi.number(),
    });
  }

  /** @returns {Image} */
  static Image() {
    return Joi.object({
      sales_channel_logo: Joi.string().allow(""),
    });
  }

  /** @returns {Inr} */
  static Inr() {
    return Joi.object({
      name: Joi.string().allow(""),
      sub_unit: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {InvoiceDetail} */
  static InvoiceDetail() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),
      invoice_date: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      irn: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      upi_qrcode: Joi.string().allow(""),
    });
  }

  /** @returns {InvoiceTypesDataResponse} */
  static InvoiceTypesDataResponse() {
    return Joi.object({
      __v: Joi.number().required(),
      _id: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      format: Joi.array().items(Joi.string().allow("")).required(),
      name: Joi.string().allow("").required(),
      pdf_type_id: Joi.number().required(),
      status: Joi.boolean(),
      visibility: Joi.boolean().required(),
    });
  }

  /** @returns {InvoiceTypesResponse} */
  static InvoiceTypesResponse() {
    return Joi.object({
      data: Joi.array()
        .items(FileStoragePlatformModel.InvoiceTypesDataResponse())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ItemsProductTable} */
  static ItemsProductTable() {
    return Joi.object({
      brand: FileStoragePlatformModel.Brand(),
      discount: Joi.number(),
      hsn_code: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      mrp: Joi.number(),
      name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      size: Joi.string().allow(""),
      tax: FileStoragePlatformModel.Tax(),
      taxable_amount: Joi.number(),
      total: Joi.number(),
      total_taxable_amount: Joi.number(),
      total_units: Joi.number(),
    });
  }

  /** @returns {Kwargs} */
  static Kwargs() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  /** @returns {KwargsAwbNumber} */
  static KwargsAwbNumber() {
    return Joi.object({
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {KwargsUpiQrcode} */
  static KwargsUpiQrcode() {
    return Joi.object({
      qr_data: Joi.string().allow(""),
      qr_url: Joi.string().allow(""),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      generator: FileStoragePlatformModel.MetaProperty(),
    });
  }

  /** @returns {MetaProperty} */
  static MetaProperty() {
    return Joi.object({
      awb_number_label_barcode_generator: FileStoragePlatformModel.AwbNumberLabelBarcodeGenerator(),
      digitalsignature_generator: FileStoragePlatformModel.DigitalsignatureGenerator(),
      shipment_id_barcode_generator: FileStoragePlatformModel.ShipmentIdBarcodeGenerator(),
      signed_qrcode_generator: FileStoragePlatformModel.SignedQrcodeGenerator(),
      upi_qrcode_generator: FileStoragePlatformModel.UpiQrcodeGenerator(),
    });
  }

  /** @returns {Params} */
  static Params() {
    return Joi.object({
      subpath: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentData} */
  static PaymentData() {
    return Joi.object({
      amount: Joi.number(),
      date: Joi.string().allow(""),
      payment_type: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptCustomerDetails} */
  static PaymentReceiptCustomerDetails() {
    return Joi.object({
      email_id: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      mobile_number: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptFormat} */
  static PaymentReceiptFormat() {
    return Joi.object({
      payment_receipt: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentReceiptMeta} */
  static PaymentReceiptMeta() {
    return Joi.object({
      action: Joi.string().allow(""),
      application_id: Joi.array().items(Joi.string().allow("")),
      company_id: Joi.number(),
      created_timestamp: Joi.number(),
      event: Joi.any(),
      event_trace_info: Joi.any(),
      format: FileStoragePlatformModel.PaymentReceiptFormat(),
      job_type: Joi.string().allow(""),
      organizaton_id: Joi.string().allow(""),
      service: FileStoragePlatformModel.PaymentReceiptService(),
      trace: Joi.string().allow(""),
      trace_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {PaymentReceiptOrderDetails} */
  static PaymentReceiptOrderDetails() {
    return Joi.object({
      final_amount: Joi.number(),
      final_amount_in_words: Joi.string().allow(""),
      jiomart_order_id: Joi.string().allow(""),
      order_created_date: Joi.string().allow(""),
      order_created_time: Joi.string().allow(""),
      prm_id: Joi.string().allow(""),
      receipt_no: Joi.string().allow(""),
      taxes: FileStoragePlatformModel.PaymentReceiptTaxes(),
      total_items: Joi.number(),
    });
  }

  /** @returns {PaymentReceiptPayload} */
  static PaymentReceiptPayload() {
    return Joi.object({
      customer_detail: FileStoragePlatformModel.PaymentReceiptCustomerDetails(),
      order_detail: FileStoragePlatformModel.PaymentReceiptOrderDetails(),
      payments: Joi.array().items(
        FileStoragePlatformModel.PaymentReceiptPayments()
      ),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptPayments} */
  static PaymentReceiptPayments() {
    return Joi.object({
      payment_desc: Joi.string().allow(""),
      txn_date: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptRequestBody} */
  static PaymentReceiptRequestBody() {
    return Joi.object({
      meta: FileStoragePlatformModel.PaymentReceiptMeta(),
      payload: FileStoragePlatformModel.PaymentReceiptPayload(),
    });
  }

  /** @returns {PaymentReceiptService} */
  static PaymentReceiptService() {
    return Joi.object({
      name: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptTaxes} */
  static PaymentReceiptTaxes() {
    return Joi.object({
      gstin: Joi.string().allow(""),
      pancard: Joi.string().allow(""),
    });
  }

  /** @returns {PdfConfig} */
  static PdfConfig() {
    return Joi.object({
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {PdfConfigSaveSuccess} */
  static PdfConfigSaveSuccess() {
    return Joi.object({
      data: FileStoragePlatformModel.PdfConfigSaveSuccessData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PdfConfigSaveSuccessData} */
  static PdfConfigSaveSuccessData() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {PdfConfigSuccess} */
  static PdfConfigSuccess() {
    return Joi.object({
      data: Joi.array().items(FileStoragePlatformModel.PdfConfigSuccessData()),
      success: Joi.boolean(),
    });
  }

  /** @returns {PdfConfigSuccessData} */
  static PdfConfigSuccessData() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      country_code: Joi.string().allow(""),
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {PdfDefaultTemplateSuccess} */
  static PdfDefaultTemplateSuccess() {
    return Joi.object({
      data: Joi.array().items(FileStoragePlatformModel.Document()),
      success: Joi.boolean(),
    });
  }

  /** @returns {ProductTable} */
  static ProductTable() {
    return Joi.object({
      cod_charges: Joi.number(),
      delivery_charge_text: Joi.string().allow(""),
      delivery_charges: Joi.number(),
      fynd_discounts: Joi.number(),
      grand_total: Joi.number(),
      products: Joi.array().items(FileStoragePlatformModel.ItemsProductTable()),
      total_in_words: Joi.string().allow(""),
      total_items: Joi.number(),
    });
  }

  /** @returns {Rates} */
  static Rates() {
    return Joi.object({
      inr: FileStoragePlatformModel.Inr(),
      usd: FileStoragePlatformModel.Usd(),
    });
  }

  /** @returns {RegisteredCompanyDetail} */
  static RegisteredCompanyDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.number(),
    });
  }

  /** @returns {ReturnDetail} */
  static ReturnDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow("").allow(null),
      gstin: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }

  /** @returns {Sgst} */
  static Sgst() {
    return Joi.object({
      percent: Joi.number(),
      value: Joi.number(),
    });
  }

  /** @returns {ShipmentIdBarcodeGenerator} */
  static ShipmentIdBarcodeGenerator() {
    return Joi.object({
      kwargs: FileStoragePlatformModel.Kwargs(),
      method: Joi.string().allow(""),
    });
  }

  /** @returns {SignedQrcodeGenerator} */
  static SignedQrcodeGenerator() {
    return Joi.object({
      kwargs: FileStoragePlatformModel.Kwargs(),
      method: Joi.string().allow(""),
    });
  }

  /** @returns {SignUrlRequest} */
  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {SignUrlResponse} */
  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(FileStoragePlatformModel.Urls()).required(),
    });
  }

  /** @returns {StartRequest} */
  static StartRequest() {
    return Joi.object({
      content_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      params: FileStoragePlatformModel.Params(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StartResponse} */
  static StartResponse() {
    return Joi.object({
      cdn: FileStoragePlatformModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
      state: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
    });
  }

  /** @returns {Tax} */
  static Tax() {
    return Joi.object({
      cgst: FileStoragePlatformModel.Cgst(),
      igst: FileStoragePlatformModel.Igst(),
      sgst: FileStoragePlatformModel.Sgst(),
    });
  }

  /** @returns {Taxes} */
  static Taxes() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),
      tax: FileStoragePlatformModel.Tax(),
      total_tax_value: Joi.number(),
    });
  }

  /** @returns {TaxTable} */
  static TaxTable() {
    return Joi.object({
      tax_in_words: Joi.string().allow(""),
      taxes: Joi.array().items(FileStoragePlatformModel.Taxes()),
      total_tax: Joi.number(),
    });
  }

  /** @returns {UpiQrcodeGenerator} */
  static UpiQrcodeGenerator() {
    return Joi.object({
      kwargs: FileStoragePlatformModel.KwargsUpiQrcode(),
      method: Joi.string().allow(""),
    });
  }

  /** @returns {Upload} */
  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Urls} */
  static Urls() {
    return Joi.object({
      expiry: Joi.number().required(),
      signed_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Usd} */
  static Usd() {
    return Joi.object({
      name: Joi.string().allow(""),
      sub_unit: Joi.string().allow(""),
      symbol: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
}
module.exports = FileStoragePlatformModel;
