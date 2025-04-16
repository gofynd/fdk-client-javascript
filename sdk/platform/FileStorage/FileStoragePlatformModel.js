const Joi = require("joi");

/**
 * @typedef ProxyResponse
 * @property {Object} [data]
 * @property {Object} [support]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
 * @property {string} absolute_url
 * @property {string} relative_url
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */

/**
 * @typedef Params
 * @property {string} [subpath] - The subpath for the file.
 */

/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */

/**
 * @typedef CreatedBy
 * @property {string} [username]
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} company_id
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {CreatedBy} [created_by]
 */

/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */

/**
 * @typedef CopyFiles
 * @property {string[]} [urls]
 * @property {DestinationNamespace} destination
 */

/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef InvoiceTypesDataResponse
 * @property {boolean} [status]
 * @property {string} _id
 * @property {number} pdf_type_id
 * @property {string} name
 * @property {string[]} format
 * @property {number} __v
 * @property {boolean} visibility
 * @property {string} country_code
 */

/**
 * @typedef InvoiceTypesResponse
 * @property {InvoiceTypesDataResponse[]} data
 * @property {boolean} success
 */

/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Object} [rates]
 * @property {number} [timestamp]
 */

/**
 * @typedef DeliveryPartnerDetail
 * @property {string} [name]
 * @property {string} [awb_number_barcode]
 * @property {string} [awb_number]
 * @property {string} [origin]
 * @property {string} [destination]
 * @property {string} [eway_bill_number]
 */

/**
 * @typedef Image
 * @property {string} [sales_channel_logo]
 */

/**
 * @typedef PaymentData
 * @property {string} [payment_type]
 * @property {number} [amount]
 * @property {string} [date]
 * @property {string} [transaction_id]
 * @property {string} [time]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {Object} [meta]
 */

/**
 * @typedef InvoiceDetail
 * @property {string} [invoice_id]
 * @property {string} [invoice_date]
 * @property {string} [irn]
 * @property {string} [external_order_id]
 * @property {string} [shipment_id]
 * @property {string} [signed_qrcode]
 * @property {string} [upi_qrcode]
 * @property {string} [device_id]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [marketplace_shipment_id]
 * @property {string} [channel_order_id]
 */

/**
 * @typedef CompanyDetail
 * @property {string} [name] - The official name of the company.
 * @property {string} [address] - The physical street address of the company.
 * @property {string} [city] - The city where the company is located.
 * @property {string} [state] - The state or province where the company is located.
 * @property {string} [country] - The country where the company is based.
 * @property {number} [zip_code] - The postal code for the company's location.
 * @property {string} [state_code] - A code representing the state, often used
 *   in official documents and forms.
 * @property {string} [country_code] - The code of the country.
 * @property {string} [gstin] - The Goods and Services Tax Identification
 *   Number, unique to each business in India.
 * @property {string} [pan] - The Permanent Account Number, unique to each
 *   taxpayer in India.
 * @property {string} [phone_no] - The primary contact phone number for the company.
 * @property {string} [cin] - The Corporate Identification Number, unique to
 *   each company registered in India.
 * @property {string} [website_url] - The URL to the company's official website.
 * @property {string} [email] - The company's official email address.
 * @property {string} [display_address] - The display address of the company.
 * @property {string} [sector] - The sector in which company is located.
 * @property {Object} [phone] - The provided phone no of country.
 * @property {string} [trn] - The trn no of the company.
 * @property {string} [vat] - The vat no of the company.
 * @property {string} [business_country_timezone] - The bussiness country timezone.
 * @property {Object} [business_country_currency] - This object represents the
 *   bussiness country currency.
 * @property {Object} [meta] - This object represents the meta fields for company.
 */

/**
 * @typedef StoreDetail
 * @property {string} [store_name]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 * @property {string} [store_id]
 */

/**
 * @typedef CustomerBillingDetail
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 * @property {string} [email]
 */

/**
 * @typedef CustomerShippingDetail
 * @property {string} [name]
 * @property {string} [phone_no]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 */

/**
 * @typedef ReturnDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [zip_code]
 * @property {string} [state_code]
 * @property {string} [gstin]
 * @property {string} [display_address]
 * @property {string} [sector]
 */

/**
 * @typedef Brand
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef Cgst
 * @property {number} [value]
 * @property {number} [percent]
 */

/**
 * @typedef Sgst
 * @property {number} [value]
 * @property {number} [percent]
 */

/**
 * @typedef Igst
 * @property {number} [value]
 * @property {number} [percent]
 */

/**
 * @typedef Tax
 * @property {Cgst} [cgst]
 * @property {Sgst} [sgst]
 * @property {Igst} [igst]
 */

/**
 * @typedef ItemsProductTable
 * @property {string} [name]
 * @property {string} [seller_identifier]
 * @property {number} [total]
 * @property {Brand} [brand]
 * @property {string} [hsn_code]
 * @property {string} [item_code]
 * @property {number} [total_units]
 * @property {string} [size]
 * @property {number} [mrp]
 * @property {number} [discount]
 * @property {number} [taxable_amount]
 * @property {number} [total_taxable_amount]
 * @property {Tax} [tax]
 * @property {Object} [meta]
 * @property {string} [country_of_origin]
 */

/**
 * @typedef ProductTable
 * @property {number} [total_items]
 * @property {ItemsProductTable[]} [products]
 * @property {number} [grand_total]
 * @property {number} [delivery_charges]
 * @property {string} [delivery_charge_text]
 * @property {number} [cod_charges]
 * @property {number} [fynd_discounts]
 * @property {string} [total_in_words]
 * @property {number} [gift_price]
 * @property {number} [total_quantity]
 * @property {number} [sub_total]
 * @property {number} [discount]
 * @property {number} [promotion]
 * @property {number} [coupon]
 * @property {number} [reward]
 * @property {number} [round_off]
 * @property {number} [total_value_of_goods]
 */

/**
 * @typedef Taxes
 * @property {string} [hsn_code]
 * @property {Tax} [tax]
 * @property {number} [total_tax_value]
 */

/**
 * @typedef TaxTable
 * @property {Taxes[]} [taxes]
 * @property {number} [total_tax]
 * @property {string} [tax_in_words]
 */

/**
 * @typedef RegisteredCompanyDetail
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {number} [zip_code]
 * @property {string} [state_code]
 * @property {string} [display_address]
 * @property {string} [sector]
 */

/**
 * @typedef Kwargs
 * @property {string} [value]
 */

/**
 * @typedef ShipmentIdBarcodeGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */

/**
 * @typedef SignedQrcodeGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */

/**
 * @typedef KwargsUpiQrcode
 * @property {string} [qr_data]
 * @property {string} [qr_url]
 */

/**
 * @typedef UpiQrcodeGenerator
 * @property {string} [method]
 * @property {KwargsUpiQrcode} [kwargs]
 */

/**
 * @typedef DigitalsignatureGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */

/**
 * @typedef KwargsAwbNumber
 * @property {Object[]} [value]
 */

/**
 * @typedef AwbNumberLabelBarcodeGenerator
 * @property {string} [method]
 * @property {KwargsAwbNumber} [kwargs]
 */

/**
 * @typedef AwbNumberBarcodeGenerator
 * @property {string} [method]
 * @property {Kwargs} [kwargs]
 */

/**
 * @typedef MetaProperty
 * @property {ShipmentIdBarcodeGenerator} [shipment_id_barcode_generator]
 * @property {SignedQrcodeGenerator} [signed_qrcode_generator]
 * @property {UpiQrcodeGenerator} [upi_qrcode_generator]
 * @property {DigitalsignatureGenerator} [digitalsignature_generator]
 * @property {AwbNumberLabelBarcodeGenerator} [awb_number_label_barcode_generator]
 * @property {AwbNumberBarcodeGenerator} [awb_number_barcode_generator]
 */

/**
 * @typedef Meta
 * @property {MetaProperty} [generator]
 */

/**
 * @typedef DummyTemplateDataPayload
 * @property {boolean} [is_export]
 * @property {boolean} [is_export_shipment]
 * @property {string} [app_domain_name]
 * @property {string} [txn_id]
 * @property {string} [utr]
 * @property {string} [po_number]
 * @property {string} [credit_note_id]
 * @property {string} [current_date]
 * @property {number} [total_value_of_goods]
 * @property {Object} [b2b_buyer_details]
 * @property {Object} [is_qwik]
 * @property {string} [order_type]
 * @property {ConversionRate} [conversion_rate]
 * @property {string} [currency_code]
 * @property {string} [shipment_id]
 * @property {DeliveryPartnerDetail} [delivery_partner_detail]
 * @property {Image} [image]
 * @property {PaymentData[]} [payments]
 * @property {InvoiceDetail} [invoice_detail]
 * @property {CompanyDetail} [company_detail]
 * @property {StoreDetail} [store_detail]
 * @property {CustomerBillingDetail} [customer_billing_detail]
 * @property {CustomerShippingDetail} [customer_shipping_detail]
 * @property {ReturnDetail} [return_detail]
 * @property {ProductTable} [product_table]
 * @property {TaxTable} [tax_table]
 * @property {string[]} [declaration_texts]
 * @property {RegisteredCompanyDetail} [registered_company_detail]
 * @property {string} [disclaimer]
 * @property {Meta} [meta]
 * @property {boolean} [is_self_ship]
 * @property {string} [mode]
 * @property {boolean} [is_self_pickup]
 * @property {Object} [shipment_meta] - This field represents the shipment meta details
 * @property {Object} [order_meta] - This field represents the order meta details
 * @property {string} [platform_name]
 * @property {number} [amount_to_be_collected]
 * @property {number} [amount_paid]
 * @property {Object[]} [waybills]
 * @property {number} [total_items]
 * @property {string} [brand_logo]
 * @property {string} [shipment_id_barcode]
 * @property {string} [signed_qrcode]
 * @property {string} [upi_qrcode]
 * @property {string} [digitalsignature]
 * @property {string} [awb_number_barcode]
 * @property {string} [uid]
 */

/**
 * @typedef DummyTemplateData
 * @property {string} [_id] - This field contains the unique identifier for the
 *   PDF payload.
 * @property {number} [pdf_type_id] - This is invoice unique id
 * @property {DummyTemplateDataPayload} payload
 * @property {string} [country_code] - This field represents the country code.
 * @property {number} [__v] - This field holds the version number.
 */

/**
 * @typedef DummyTemplateDataItems
 * @property {DummyTemplateData[]} data
 * @property {boolean} success
 */

/**
 * @typedef PdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {string} [template] - This is html template string
 * @property {number} [pdf_type_id]
 */

/**
 * @typedef PdfConfigSuccessData
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {number} [__v]
 * @property {string} [country_code]
 */

/**
 * @typedef PdfConfigSuccess
 * @property {PdfConfigSuccessData[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef PdfConfigSaveSuccessData
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {number} [__v]
 */

/**
 * @typedef PdfConfigSaveSuccess
 * @property {PdfConfigSaveSuccessData} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {Document[]} [data]
 * @property {boolean} [success] - Indicates if the request was successful.
 */

/**
 * @typedef Document
 * @property {string} [_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {string} [country_code]
 * @property {number} [__v]
 */

/**
 * @typedef PaymentReceiptRequestBody
 * @property {PaymentReceiptPayload} [payload]
 * @property {PaymentReceiptMeta} [meta]
 */

/**
 * @typedef PaymentReceiptOrderDetails
 * @property {string} [jiomart_order_id]
 * @property {number} [total_items]
 * @property {number} [final_amount]
 * @property {string} [final_amount_in_words]
 * @property {string} [order_created_date]
 * @property {string} [order_created_time]
 * @property {string} [prm_id]
 * @property {string} [receipt_no]
 * @property {PaymentReceiptTaxes} [taxes]
 */

/**
 * @typedef PaymentReceiptCustomerDetails
 * @property {string} [id]
 * @property {string} [email_id]
 * @property {string} [last_name]
 * @property {string} [first_name]
 * @property {string} [mobile_number]
 */

/**
 * @typedef PaymentReceiptPayments
 * @property {string} [payment_desc]
 * @property {string} [txn_date]
 */

/**
 * @typedef PaymentReceiptFormat
 * @property {string[]} [payment_receipt]
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
 * @typedef PaymentReceiptPayload
 * @property {string} [uid]
 * @property {PaymentReceiptOrderDetails} [order_detail]
 * @property {PaymentReceiptCustomerDetails} [customer_detail]
 * @property {PaymentReceiptPayments[]} [payments]
 */

/**
 * @typedef PaymentReceiptMeta
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {Object} [event]
 * @property {string} [organizaton_id]
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {PaymentReceiptFormat} [format]
 * @property {string[]} [trace_id]
 * @property {number} [created_timestamp]
 * @property {PaymentReceiptService} [service]
 * @property {Object} [event_trace_info]
 * @property {string} [trace]
 */

/**
 * @typedef ExtensionSlug
 * @property {string} [extension_slug]
 */

class FileStoragePlatformModel {
  /** @returns {ProxyResponse} */
  static ProxyResponse() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      support: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {FailedResponse} */
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {CDN} */
  static CDN() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Upload} */
  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {StartResponse} */
  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStoragePlatformModel.Upload().required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Params} */
  static Params() {
    return Joi.object({
      subpath: Joi.string().allow(""),
    });
  }

  /** @returns {StartRequest} */
  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      params: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      username: Joi.string().allow(""),
    });
  }

  /** @returns {CompleteResponse} */
  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      company_id: Joi.number().required(),
      size: Joi.number().required(),
      upload: FileStoragePlatformModel.Upload().required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: FileStoragePlatformModel.CreatedBy(),
    });
  }

  /** @returns {DestinationNamespace} */
  static DestinationNamespace() {
    return Joi.object({
      namespace: Joi.string().allow(""),
    });
  }

  /** @returns {CopyFiles} */
  static CopyFiles() {
    return Joi.object({
      urls: Joi.array().items(Joi.string().allow("")),
      destination: FileStoragePlatformModel.DestinationNamespace().required(),
    });
  }

  /** @returns {Urls} */
  static Urls() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      signed_url: Joi.string().allow("").required(),
      expiry: Joi.number().required(),
    });
  }

  /** @returns {SignUrlResponse} */
  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(FileStoragePlatformModel.Urls()).required(),
    });
  }

  /** @returns {SignUrlRequest} */
  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {InvoiceTypesDataResponse} */
  static InvoiceTypesDataResponse() {
    return Joi.object({
      status: Joi.boolean(),
      _id: Joi.string().allow("").required(),
      pdf_type_id: Joi.number().required(),
      name: Joi.string().allow("").required(),
      format: Joi.array().items(Joi.string().allow("")).required(),
      __v: Joi.number().required(),
      visibility: Joi.boolean().required(),
      country_code: Joi.string().allow("").required(),
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

  /** @returns {ConversionRate} */
  static ConversionRate() {
    return Joi.object({
      base: Joi.string().allow(""),
      rates: Joi.object().pattern(/\S/, Joi.any()),
      timestamp: Joi.number(),
    });
  }

  /** @returns {DeliveryPartnerDetail} */
  static DeliveryPartnerDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      awb_number_barcode: Joi.string().allow(""),
      awb_number: Joi.string().allow(""),
      origin: Joi.string().allow(""),
      destination: Joi.string().allow(""),
      eway_bill_number: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Image} */
  static Image() {
    return Joi.object({
      sales_channel_logo: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentData} */
  static PaymentData() {
    return Joi.object({
      payment_type: Joi.string().allow(""),
      amount: Joi.number(),
      date: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
      time: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      name: Joi.string().allow(""),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {InvoiceDetail} */
  static InvoiceDetail() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),
      invoice_date: Joi.string().allow(""),
      irn: Joi.string().allow(""),
      external_order_id: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      upi_qrcode: Joi.string().allow(""),
      device_id: Joi.string().allow(""),
      marketplace_invoice_id: Joi.string().allow(""),
      marketplace_shipment_id: Joi.string().allow(""),
      channel_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {CompanyDetail} */
  static CompanyDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      zip_code: Joi.number(),
      state_code: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      pan: Joi.string().allow("").allow(null),
      phone_no: Joi.string().allow("").allow(null),
      cin: Joi.string().allow(""),
      website_url: Joi.string().allow(""),
      email: Joi.string().allow(""),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      phone: Joi.object().pattern(/\S/, Joi.any()),
      trn: Joi.string().allow(""),
      vat: Joi.string().allow(""),
      business_country_timezone: Joi.string().allow(""),
      business_country_currency: Joi.object().pattern(/\S/, Joi.any()),
      meta: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {StoreDetail} */
  static StoreDetail() {
    return Joi.object({
      store_name: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerBillingDetail} */
  static CustomerBillingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      phone_no: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
      email: Joi.string().allow(""),
    });
  }

  /** @returns {CustomerShippingDetail} */
  static CustomerShippingDetail() {
    return Joi.object({
      name: Joi.string().allow(""),
      phone_no: Joi.string().allow(""),
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnDetail} */
  static ReturnDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow("").allow(null),
      zip_code: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      gstin: Joi.string().allow("").allow(null),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    });
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {Cgst} */
  static Cgst() {
    return Joi.object({
      value: Joi.number(),
      percent: Joi.number(),
    });
  }

  /** @returns {Sgst} */
  static Sgst() {
    return Joi.object({
      value: Joi.number(),
      percent: Joi.number(),
    });
  }

  /** @returns {Igst} */
  static Igst() {
    return Joi.object({
      value: Joi.number(),
      percent: Joi.number(),
    });
  }

  /** @returns {Tax} */
  static Tax() {
    return Joi.object({
      cgst: FileStoragePlatformModel.Cgst(),
      sgst: FileStoragePlatformModel.Sgst(),
      igst: FileStoragePlatformModel.Igst(),
    });
  }

  /** @returns {ItemsProductTable} */
  static ItemsProductTable() {
    return Joi.object({
      name: Joi.string().allow(""),
      seller_identifier: Joi.string().allow(""),
      total: Joi.number(),
      brand: FileStoragePlatformModel.Brand(),
      hsn_code: Joi.string().allow(""),
      item_code: Joi.string().allow(""),
      total_units: Joi.number(),
      size: Joi.string().allow(""),
      mrp: Joi.number(),
      discount: Joi.number(),
      taxable_amount: Joi.number(),
      total_taxable_amount: Joi.number(),
      tax: FileStoragePlatformModel.Tax(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      country_of_origin: Joi.string().allow(""),
    });
  }

  /** @returns {ProductTable} */
  static ProductTable() {
    return Joi.object({
      total_items: Joi.number(),
      products: Joi.array().items(FileStoragePlatformModel.ItemsProductTable()),
      grand_total: Joi.number(),
      delivery_charges: Joi.number(),
      delivery_charge_text: Joi.string().allow(""),
      cod_charges: Joi.number(),
      fynd_discounts: Joi.number(),
      total_in_words: Joi.string().allow(""),
      gift_price: Joi.number(),
      total_quantity: Joi.number(),
      sub_total: Joi.number(),
      discount: Joi.number(),
      promotion: Joi.number(),
      coupon: Joi.number(),
      reward: Joi.number(),
      round_off: Joi.number(),
      total_value_of_goods: Joi.number(),
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
      taxes: Joi.array().items(FileStoragePlatformModel.Taxes()),
      total_tax: Joi.number(),
      tax_in_words: Joi.string().allow(""),
    });
  }

  /** @returns {RegisteredCompanyDetail} */
  static RegisteredCompanyDetail() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      state: Joi.string().allow(""),
      country: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      zip_code: Joi.number(),
      state_code: Joi.string().allow(""),
      display_address: Joi.string().allow(""),
      sector: Joi.string().allow(""),
    });
  }

  /** @returns {Kwargs} */
  static Kwargs() {
    return Joi.object({
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentIdBarcodeGenerator} */
  static ShipmentIdBarcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {SignedQrcodeGenerator} */
  static SignedQrcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {KwargsUpiQrcode} */
  static KwargsUpiQrcode() {
    return Joi.object({
      qr_data: Joi.string().allow(""),
      qr_url: Joi.string().allow(""),
    });
  }

  /** @returns {UpiQrcodeGenerator} */
  static UpiQrcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.KwargsUpiQrcode(),
    });
  }

  /** @returns {DigitalsignatureGenerator} */
  static DigitalsignatureGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {KwargsAwbNumber} */
  static KwargsAwbNumber() {
    return Joi.object({
      value: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {AwbNumberLabelBarcodeGenerator} */
  static AwbNumberLabelBarcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.KwargsAwbNumber(),
    });
  }

  /** @returns {AwbNumberBarcodeGenerator} */
  static AwbNumberBarcodeGenerator() {
    return Joi.object({
      method: Joi.string().allow(""),
      kwargs: FileStoragePlatformModel.Kwargs(),
    });
  }

  /** @returns {MetaProperty} */
  static MetaProperty() {
    return Joi.object({
      shipment_id_barcode_generator: FileStoragePlatformModel.ShipmentIdBarcodeGenerator(),
      signed_qrcode_generator: FileStoragePlatformModel.SignedQrcodeGenerator(),
      upi_qrcode_generator: FileStoragePlatformModel.UpiQrcodeGenerator(),
      digitalsignature_generator: FileStoragePlatformModel.DigitalsignatureGenerator(),
      awb_number_label_barcode_generator: FileStoragePlatformModel.AwbNumberLabelBarcodeGenerator(),
      awb_number_barcode_generator: FileStoragePlatformModel.AwbNumberBarcodeGenerator(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      generator: FileStoragePlatformModel.MetaProperty(),
    });
  }

  /** @returns {DummyTemplateDataPayload} */
  static DummyTemplateDataPayload() {
    return Joi.object({
      is_export: Joi.boolean(),
      is_export_shipment: Joi.boolean(),
      app_domain_name: Joi.string().allow(""),
      txn_id: Joi.string().allow(""),
      utr: Joi.string().allow(""),
      po_number: Joi.string().allow(""),
      credit_note_id: Joi.string().allow("").allow(null),
      current_date: Joi.string().allow(""),
      total_value_of_goods: Joi.number(),
      b2b_buyer_details: Joi.object().pattern(/\S/, Joi.any()),
      is_qwik: Joi.object().pattern(/\S/, Joi.any()),
      order_type: Joi.string().allow(""),
      conversion_rate: FileStoragePlatformModel.ConversionRate(),
      currency_code: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      delivery_partner_detail: FileStoragePlatformModel.DeliveryPartnerDetail(),
      image: FileStoragePlatformModel.Image(),
      payments: Joi.array().items(FileStoragePlatformModel.PaymentData()),
      invoice_detail: FileStoragePlatformModel.InvoiceDetail(),
      company_detail: FileStoragePlatformModel.CompanyDetail(),
      store_detail: FileStoragePlatformModel.StoreDetail(),
      customer_billing_detail: FileStoragePlatformModel.CustomerBillingDetail(),
      customer_shipping_detail: FileStoragePlatformModel.CustomerShippingDetail(),
      return_detail: FileStoragePlatformModel.ReturnDetail(),
      product_table: FileStoragePlatformModel.ProductTable(),
      tax_table: FileStoragePlatformModel.TaxTable(),
      declaration_texts: Joi.array().items(Joi.string().allow("")),
      registered_company_detail: FileStoragePlatformModel.RegisteredCompanyDetail(),
      disclaimer: Joi.string().allow(""),
      meta: FileStoragePlatformModel.Meta(),
      is_self_ship: Joi.boolean(),
      mode: Joi.string().allow(""),
      is_self_pickup: Joi.boolean(),
      shipment_meta: Joi.object().pattern(/\S/, Joi.any()),
      order_meta: Joi.object().pattern(/\S/, Joi.any()),
      platform_name: Joi.string().allow(""),
      amount_to_be_collected: Joi.number(),
      amount_paid: Joi.number(),
      waybills: Joi.array().items(Joi.any()),
      total_items: Joi.number(),
      brand_logo: Joi.string().allow(""),
      shipment_id_barcode: Joi.string().allow(""),
      signed_qrcode: Joi.string().allow(""),
      upi_qrcode: Joi.string().allow(""),
      digitalsignature: Joi.string().allow(""),
      awb_number_barcode: Joi.string().allow(""),
      uid: Joi.string().allow(""),
    });
  }

  /** @returns {DummyTemplateData} */
  static DummyTemplateData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      payload: FileStoragePlatformModel.DummyTemplateDataPayload().required(),
      country_code: Joi.string().allow(""),
      __v: Joi.number(),
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

  /** @returns {PdfConfig} */
  static PdfConfig() {
    return Joi.object({
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
    });
  }

  /** @returns {PdfConfigSuccessData} */
  static PdfConfigSuccessData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      __v: Joi.number(),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {PdfConfigSuccess} */
  static PdfConfigSuccess() {
    return Joi.object({
      data: Joi.array().items(FileStoragePlatformModel.PdfConfigSuccessData()),
      success: Joi.boolean(),
    });
  }

  /** @returns {PdfConfigSaveSuccessData} */
  static PdfConfigSaveSuccessData() {
    return Joi.object({
      _id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {PdfConfigSaveSuccess} */
  static PdfConfigSaveSuccess() {
    return Joi.object({
      data: FileStoragePlatformModel.PdfConfigSaveSuccessData(),
      success: Joi.boolean(),
    });
  }

  /** @returns {PdfDefaultTemplateSuccess} */
  static PdfDefaultTemplateSuccess() {
    return Joi.object({
      data: Joi.array().items(FileStoragePlatformModel.Document()),
      success: Joi.boolean(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      _id: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {PaymentReceiptRequestBody} */
  static PaymentReceiptRequestBody() {
    return Joi.object({
      payload: FileStoragePlatformModel.PaymentReceiptPayload(),
      meta: FileStoragePlatformModel.PaymentReceiptMeta(),
    });
  }

  /** @returns {PaymentReceiptOrderDetails} */
  static PaymentReceiptOrderDetails() {
    return Joi.object({
      jiomart_order_id: Joi.string().allow(""),
      total_items: Joi.number(),
      final_amount: Joi.number(),
      final_amount_in_words: Joi.string().allow(""),
      order_created_date: Joi.string().allow(""),
      order_created_time: Joi.string().allow(""),
      prm_id: Joi.string().allow(""),
      receipt_no: Joi.string().allow(""),
      taxes: FileStoragePlatformModel.PaymentReceiptTaxes(),
    });
  }

  /** @returns {PaymentReceiptCustomerDetails} */
  static PaymentReceiptCustomerDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      email_id: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      mobile_number: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptPayments} */
  static PaymentReceiptPayments() {
    return Joi.object({
      payment_desc: Joi.string().allow(""),
      txn_date: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentReceiptFormat} */
  static PaymentReceiptFormat() {
    return Joi.object({
      payment_receipt: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {PaymentReceiptPayload} */
  static PaymentReceiptPayload() {
    return Joi.object({
      uid: Joi.string().allow(""),
      order_detail: FileStoragePlatformModel.PaymentReceiptOrderDetails(),
      customer_detail: FileStoragePlatformModel.PaymentReceiptCustomerDetails(),
      payments: Joi.array().items(
        FileStoragePlatformModel.PaymentReceiptPayments()
      ),
    });
  }

  /** @returns {PaymentReceiptMeta} */
  static PaymentReceiptMeta() {
    return Joi.object({
      job_type: Joi.string().allow(""),
      action: Joi.string().allow(""),
      event: Joi.any(),
      organizaton_id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.array().items(Joi.string().allow("")),
      format: FileStoragePlatformModel.PaymentReceiptFormat(),
      trace_id: Joi.array().items(Joi.string().allow("")),
      created_timestamp: Joi.number(),
      service: FileStoragePlatformModel.PaymentReceiptService(),
      event_trace_info: Joi.any(),
      trace: Joi.string().allow(""),
    });
  }

  /** @returns {ExtensionSlug} */
  static ExtensionSlug() {
    return Joi.object({
      extension_slug: Joi.string().allow(""),
    });
  }
}
module.exports = FileStoragePlatformModel;
