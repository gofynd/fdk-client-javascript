const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const LogisticValidator = require("./LogisticPlatformApplicationValidator");

class Logistic {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Zone configuration of application.
   * @description: This API returns serviceability config of the application.
   */
  getApplicationServiceability({} = {}) {
    const { error } = LogisticValidator.getApplicationServiceability().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  upsertZoneControllerView({ body } = {}) {
    const { error } = LogisticValidator.upsertZoneControllerView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      body
    );
  }
}
module.exports = Logistic;
