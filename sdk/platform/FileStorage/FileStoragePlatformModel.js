const Joi = require("joi");

/**
 * @typedef FailedBrowseFilesResult
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
 * @typedef FileUpload
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {string[]} [tags]
 */

/**
 * @typedef FileUploadStart
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
 * @typedef FileUploadComplete
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
 * @typedef ProxyFileAccess
 * @property {Object} [data]
 * @property {Object} [support]
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
 * @typedef SignUrlResult
 * @property {Urls[]} urls
 */

/**
 * @typedef SignUrl
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef PdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {string} [template] - This is html template string.
 * @property {number} [pdf_type_id] - This field holds an identifier for the type of PDF.
 * @property {string} [country_code] - This field contains the country code.
 * @property {boolean} [default_template] - This field indicates whether the
 *   fetched HTML template is the default template.
 */

/**
 * @typedef PdfConfigSuccessData
 * @property {string} [_id] - This field contains the unique identifier for the
 *   PDF configuration.
 * @property {number} [company_id] - This field holds the identifier for the
 *   company associated with the PDF configuration.
 * @property {string} [application_id] - This field contains the identifier for
 *   the application that uses this PDF configuration.
 * @property {number} [pdf_type_id] - This field holds an identifier for the type of PDF.
 * @property {string} [format] - This field specifies the format of the invoice document.
 * @property {string} [template] - This field contains the HTML template string
 *   for the PDF document.
 * @property {number} [__v] - This field holds the version number of the PDF
 *   configuration document.
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
  /** @returns {FailedBrowseFilesResult} */
  static FailedBrowseFilesResult() {
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

  /** @returns {FileUpload} */
  static FileUpload() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStoragePlatformModel.Upload().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FileUploadStart} */
  static FileUploadStart() {
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

  /** @returns {FileUploadComplete} */
  static FileUploadComplete() {
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

  /** @returns {ProxyFileAccess} */
  static ProxyFileAccess() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      support: Joi.object().pattern(/\S/, Joi.any()),
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

  /** @returns {SignUrlResult} */
  static SignUrlResult() {
    return Joi.object({
      urls: Joi.array().items(FileStoragePlatformModel.Urls()).required(),
    });
  }

  /** @returns {SignUrl} */
  static SignUrl() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {PdfConfig} */
  static PdfConfig() {
    return Joi.object({
      format: Joi.string().allow(""),
      template: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      country_code: Joi.string().allow(""),
      default_template: Joi.boolean(),
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
      event: Joi.object().pattern(/\S/, Joi.any()),
      organizaton_id: Joi.string().allow(""),
      company_id: Joi.number(),
      application_id: Joi.array().items(Joi.string().allow("")),
      format: FileStoragePlatformModel.PaymentReceiptFormat(),
      trace_id: Joi.array().items(Joi.string().allow("")),
      created_timestamp: Joi.number(),
      service: FileStoragePlatformModel.PaymentReceiptService(),
      event_trace_info: Joi.object().pattern(/\S/, Joi.any()),
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
