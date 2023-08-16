const Joi = require("joi");

class FileStorageModel {
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
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
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
