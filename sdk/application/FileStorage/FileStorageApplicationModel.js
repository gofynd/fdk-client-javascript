const Joi = require("joi");

class FileStorageModel {
  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(FileStorageModel.DbRecord()).required(),
      page: FileStorageModel.Page().required(),
    });
  }
  static BulkRequest() {
    return Joi.object({
      configuration: FileStorageModel.ReqConfiguration(),
      destination: FileStorageModel.Destination().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static BulkUploadResponse() {
    return Joi.object({
      task: FileStorageModel.CopyFileTask().required(),
      tracking_url: Joi.string().allow("").required(),
    });
  }
  static CDN() {
    return Joi.object({
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
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
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
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
  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
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
