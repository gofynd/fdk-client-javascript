const Joi = require("joi");

const FileStoragePlatformModel = require("./FileStoragePlatformModel");

/**
 * @typedef AppCompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
 */

/**
 * @typedef AppCopyFilesParam
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.CopyFiles} body
 */

/**
 * @typedef AppStartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartRequest} body
 */

/**
 * @typedef AppbrowseParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {number} [page] - Page no
 * @property {number} [limit] - Limit
 * @property {string} [search] - Search
 */

/**
 * @typedef BrowsefilesParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {number} [page] - Page no
 * @property {number} [limit] - Limit
 * @property {string} [search] - Search
 * @property {FileStoragePlatformModel.ExtensionSlug} body
 */

/**
 * @typedef GeneratePaymentReceiptParam
 * @property {FileStoragePlatformModel.PaymentReceiptRequestBody} body
 */

/**
 * @typedef GetDefaultHtmlTemplateParam
 * @property {number} pdfTypeId
 * @property {string} format
 * @property {string} [countryCode]
 */

/**
 * @typedef GetDefaultPdfDataParam
 * @property {number} pdfTypeId
 * @property {string} [countryCode]
 */

/**
 * @typedef GetDefaultPdfTemplateParam
 * @property {number} pdfTypeId
 * @property {string} format
 * @property {string} [countryCode]
 */

/**
 * @typedef GetPdfTypesParam
 * @property {string} [countryCode]
 */

/**
 * @typedef SaveHtmlTemplateParam
 * @property {FileStoragePlatformModel.PdfConfig} body
 */

/**
 * @typedef UpdateHtmlTemplateParam
 * @property {string} id
 * @property {FileStoragePlatformModel.PdfConfig} body
 */

class FileStoragePlatformApplicationValidator {
  /** @returns {AppCompleteUploadParam} */
  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStoragePlatformModel.StartResponse().required(),
    }).required();
  }

  /** @returns {AppCopyFilesParam} */
  static appCopyFiles() {
    return Joi.object({
      sync: Joi.boolean(),

      body: FileStoragePlatformModel.CopyFiles().required(),
    }).required();
  }

  /** @returns {AppStartUploadParam} */
  static appStartUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStoragePlatformModel.StartRequest().required(),
    }).required();
  }

  /** @returns {AppbrowseParam} */
  static appbrowse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      page: Joi.number(),
      limit: Joi.number(),
      search: Joi.string().allow(""),
    }).required();
  }

  /** @returns {BrowsefilesParam} */
  static browsefiles() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      page: Joi.number(),
      limit: Joi.number(),
      search: Joi.string().allow(""),
      body: FileStoragePlatformModel.ExtensionSlug().required(),
    }).required();
  }

  /** @returns {GeneratePaymentReceiptParam} */
  static generatePaymentReceipt() {
    return Joi.object({
      body: FileStoragePlatformModel.PaymentReceiptRequestBody().required(),
    }).required();
  }

  /** @returns {GetDefaultHtmlTemplateParam} */
  static getDefaultHtmlTemplate() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
      format: Joi.string().allow("").required(),
      countryCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetDefaultPdfDataParam} */
  static getDefaultPdfData() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
      countryCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetDefaultPdfTemplateParam} */
  static getDefaultPdfTemplate() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
      format: Joi.string().allow("").required(),
      countryCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPdfTypesParam} */
  static getPdfTypes() {
    return Joi.object({
      countryCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {SaveHtmlTemplateParam} */
  static saveHtmlTemplate() {
    return Joi.object({
      body: FileStoragePlatformModel.PdfConfig().required(),
    }).required();
  }

  /** @returns {UpdateHtmlTemplateParam} */
  static updateHtmlTemplate() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: FileStoragePlatformModel.PdfConfig().required(),
    }).required();
  }
}

module.exports = FileStoragePlatformApplicationValidator;
