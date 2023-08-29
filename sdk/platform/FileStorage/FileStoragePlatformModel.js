const Joi = require("joi");

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */

/**
 * @typedef BulkUploadFailResponse
 * @property {Status} status
 */

/**
 * @typedef BulkUploadSyncMode
 * @property {FilesSuccess[]} [files]
 * @property {Status} status
 */

/**
 * @typedef CDN
 * @property {string} absolute_url
 * @property {string} relative_url
 * @property {string} url
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
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
 * @typedef CopyFiles
 * @property {DestinationNamespace} destination
 * @property {string[]} urls
 */

/**
 * @typedef DbRecord
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} [operation]
 * @property {boolean} success
 * @property {string[]} tags
 * @property {Upload} upload
 */

/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */

/**
 * @typedef DummyTemplateDataItems
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object} payload
 * @property {number} [pdf_type_id]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef File
 * @property {FileSrc} src
 */

/**
 * @typedef FileSrc
 * @property {string} [method]
 * @property {string} [namespace]
 * @property {string} url
 */

/**
 * @typedef FilesSuccess
 * @property {File} [file]
 * @property {boolean} success
 */

/**
 * @typedef InvoiceTypesResponse
 * @property {number} __v
 * @property {string} _id
 * @property {string[]} format
 * @property {string} name
 * @property {number} pdf_type_id
 * @property {Object} schema
 * @property {boolean} visibility
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef pdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {number} [pdf_type_id]
 * @property {string} [template] - This is html template string
 */

/**
 * @typedef PdfConfigSaveSuccess
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
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */

/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */

/**
 * @typedef pdfRender
 * @property {string} [format]
 * @property {Object} [payload]
 * @property {string} [template]
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
 * @property {Object} [params]
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
 * @typedef Status
 * @property {number} failed
 * @property {string} [result]
 * @property {number} succeeded
 * @property {number} total
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

class FileStoragePlatformModel {
  /** @returns {BrowseResponse} */
  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(FileStoragePlatformModel.DbRecord()).required(),
      page: FileStoragePlatformModel.Page().required(),
    });
  }

  /** @returns {BulkUploadFailResponse} */
  static BulkUploadFailResponse() {
    return Joi.object({
      status: FileStoragePlatformModel.Status().required(),
    });
  }

  /** @returns {BulkUploadSyncMode} */
  static BulkUploadSyncMode() {
    return Joi.object({
      files: Joi.array().items(FileStoragePlatformModel.FilesSuccess()),
      status: FileStoragePlatformModel.Status().required(),
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

  /** @returns {CompleteResponse} */
  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStoragePlatformModel.CDN().required(),
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
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {CopyFiles} */
  static CopyFiles() {
    return Joi.object({
      destination: FileStoragePlatformModel.DestinationNamespace().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {DbRecord} */
  static DbRecord() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow(""),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {DestinationNamespace} */
  static DestinationNamespace() {
    return Joi.object({
      namespace: Joi.string().allow(""),
    });
  }

  /** @returns {DummyTemplateDataItems} */
  static DummyTemplateDataItems() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      payload: Joi.any().required(),
      pdf_type_id: Joi.number(),
    });
  }

  /** @returns {FailedResponse} */
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {File} */
  static File() {
    return Joi.object({
      src: FileStoragePlatformModel.FileSrc().required(),
    });
  }

  /** @returns {FileSrc} */
  static FileSrc() {
    return Joi.object({
      method: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {FilesSuccess} */
  static FilesSuccess() {
    return Joi.object({
      file: FileStoragePlatformModel.File(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {InvoiceTypesResponse} */
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

  /** @returns {Page} */
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

  /** @returns {pdfConfig} */
  static pdfConfig() {
    return Joi.object({
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {PdfConfigSaveSuccess} */
  static PdfConfigSaveSuccess() {
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
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      company_id: Joi.number(),
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {PdfDefaultTemplateSuccess} */
  static PdfDefaultTemplateSuccess() {
    return Joi.object({
      __v: Joi.number(),
      _id: Joi.string().allow(""),
      format: Joi.string().allow(""),
      pdf_type_id: Joi.number(),
      template: Joi.string().allow(""),
    });
  }

  /** @returns {pdfRender} */
  static pdfRender() {
    return Joi.object({
      format: Joi.string().allow(""),
      payload: Joi.any(),
      template: Joi.string().allow(""),
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
      params: Joi.any(),
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

  /** @returns {Status} */
  static Status() {
    return Joi.object({
      failed: Joi.number().required(),
      result: Joi.string().allow(""),
      succeeded: Joi.number().required(),
      total: Joi.number().required(),
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
}
module.exports = FileStoragePlatformModel;
