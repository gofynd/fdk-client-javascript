const Joi = require("joi");

const FileStoragePlatformModel = require("./FileStoragePlatformModel");

/**
 * @typedef AppCompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.FileUpload} body
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
 * @property {FileStoragePlatformModel.FileUploadStart} body
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
 * @typedef DeletePdfGeneratorConfigParam
 * @property {string} id - Unique identifier used for operations.
 */

/**
 * @typedef FetchPdfDefaultTemplateByIdParam
 * @property {string} id - Unique identifier for the default PDF template.
 */

/**
 * @typedef FetchPdfTypeByIdParam
 * @property {string} id - Unique identifier for the PDF type.
 */

/**
 * @typedef GeneratePaymentReceiptParam
 * @property {FileStoragePlatformModel.PaymentReceiptRequestBody} body
 */

/**
 * @typedef GetConfigHtmlTemplateByIdParam
 * @property {string} id - Unique identifier for fetching PDF configuration details.
 */

/**
 * @typedef GetDefaultPdfDataParam
 * @property {number} pdfTypeId - Unique identifier for the invoice type.
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 */

/**
 * @typedef GetDefaultPdfTemplateParam
 * @property {number} pdfTypeId - Unique identifier for the invoice type.
 * @property {string} format - Specifies the invoice document format (e.g., A4,
 *   A6, POS, A3).
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 */

/**
 * @typedef GetHtmlTemplateConfigParam
 * @property {number} pdfTypeId - Unique identifier for the invoice type.
 * @property {string} format - Specifies the invoice document format (e.g., A4,
 *   A6, POS, A3).
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 */

/**
 * @typedef GetPdfPayloadByIdParam
 * @property {string} id - Unique identifier associated with the PDF payload,
 *   used for retrieving or processing PDF-related data.
 */

/**
 * @typedef GetPdfTypesParam
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 * @property {boolean} storeOs - Identifies whether the store OS determines the
 *   PDF generator flow displayed on the UI.
 */

/**
 * @typedef SaveHtmlTemplateParam
 * @property {FileStoragePlatformModel.PdfConfig} body
 */

/**
 * @typedef UpdateHtmlTemplateParam
 * @property {string} id - Unique identifier used for operations.
 * @property {FileStoragePlatformModel.PdfConfig} body
 */

class FileStoragePlatformApplicationValidator {
  /** @returns {AppCompleteUploadParam} */
  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStoragePlatformModel.FileUpload().required(),
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

      body: FileStoragePlatformModel.FileUploadStart().required(),
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

  /** @returns {DeletePdfGeneratorConfigParam} */
  static deletePdfGeneratorConfig() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {FetchPdfDefaultTemplateByIdParam} */
  static fetchPdfDefaultTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {FetchPdfTypeByIdParam} */
  static fetchPdfTypeById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GeneratePaymentReceiptParam} */
  static generatePaymentReceipt() {
    return Joi.object({
      body: FileStoragePlatformModel.PaymentReceiptRequestBody().required(),
    }).required();
  }

  /** @returns {GetConfigHtmlTemplateByIdParam} */
  static getConfigHtmlTemplateById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
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

  /** @returns {GetHtmlTemplateConfigParam} */
  static getHtmlTemplateConfig() {
    return Joi.object({
      pdfTypeId: Joi.number().required(),
      format: Joi.string().allow("").required(),
      countryCode: Joi.string().allow(""),
    }).required();
  }

  /** @returns {GetPdfPayloadByIdParam} */
  static getPdfPayloadById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {GetPdfTypesParam} */
  static getPdfTypes() {
    return Joi.object({
      countryCode: Joi.string().allow(""),
      storeOs: Joi.boolean().required(),
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
