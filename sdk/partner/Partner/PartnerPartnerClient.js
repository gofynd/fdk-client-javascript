const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PartnerAPIClient = require("../PartnerAPIClient");
const PartnerValidator = require("./PartnerPartnerValidator");
const PartnerModel = require("./PartnerPartnerModel");
const { Logger } = require("./../../common/Logger");

class Partner {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @param {ExtensionDraftRequest} arg.body
   * @summary: Submit extension for review
   * @description: Use this API to submit the extension for review
   */
  submitExtensionForReview({ extensionId, body } = {}) {
    const { error } = PartnerValidator.submitExtensionForReview().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/partners/v1.0/organization/${this.config.organizationId}/extension/review/${extensionId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @param {ExtensionUnpublishRequest} arg.body
   * @summary: Submit extension for unpublish
   * @description: Use this API to unpublish the extension
   */
  unpubishExtension({ extensionId, body } = {}) {
    const { error } = PartnerValidator.unpubishExtension().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/partners/v1.0/organization/${this.config.organizationId}/extension/review/${extensionId}/unpublish`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ExtensionCommon} arg.body
   * @summary: Create new extension
   * @description: Use this API to create new extension
   */
  createExtension({ body } = {}) {
    const { error } = PartnerValidator.createExtension().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/partners/v1.0/organization/${this.config.organizationId}/extension`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @summary: Get the details of extension
   * @description: Use this API to get details of extension
   */
  getExtensionById({ extensionId } = {}) {
    const { error } = PartnerValidator.getExtensionById().validate(
      {
        extensionId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/partners/v1.0/organization/${this.config.organizationId}/extension/${extensionId}`,
      query_params,
      undefined
    );
  }
}
module.exports = Partner;
