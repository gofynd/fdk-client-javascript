const InternalAPIClient = require("../InternalAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const FileStorageValidator = require("./FileStorageInternalValidator");
const FileStorageModel = require("./FileStorageInternalModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");
const axios = require("axios");

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      generateBulkPdf: "/___/internal/assets/v1.0/bulk/generate-shipment",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateShipmentRequestBody} arg.body
   * @returns {Promise<GenerateShipment200>} - Success response
   * @summary: Generate single PDFs for bulk shipments
   * @description: Generate single PDFs for bulk shipments for invoices, label's and Delivery challan
   */
  async generateBulkPdf({ body } = {}) {
    const { error } = FileStorageValidator.generateBulkPdf().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FileStorageValidator.generateBulkPdf().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateBulkPdf",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await InternalAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["generateBulkPdf"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FileStorageModel.GenerateShipment200().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateBulkPdf",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

/**
 * @param data
 * @param {string} file_name
 * @param {string} content_type
 * @param {string} namespace
 * @param {number} size
 * @param {number} tags
 */
FileStorage.prototype.upload = function ({
  data,
  file_name,
  content_type,
  namespace,
  size,
  tags,
} = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const dataObj = await this.startUpload({
        namespace,
        body: {
          file_name,
          content_type,
          size: size,
          tags: tags,
        },
      });
      if (dataObj.upload && dataObj.upload.url) {
        await axios.put(dataObj.upload.url, data, {
          withCredentials: false,
          headers: { "Content-Type": content_type },
        });
      } else {
        reject({ message: "Failed to upload file" });
      }
      delete dataObj.tags;

      const completeRes = await this.completeUpload({
        namespace,
        body: dataObj,
      });

      resolve(completeRes);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = FileStorage;
