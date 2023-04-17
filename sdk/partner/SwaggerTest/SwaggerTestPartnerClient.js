const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PartnerAPIClient = require("../PartnerAPIClient");
const SwaggerTestValidator = require("./SwaggerTestPartnerValidator");
const SwaggerTestModel = require("./SwaggerTestPartnerModel");
const { Logger } = require("./../../common/Logger");

class SwaggerTest {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: test swagger
   * @description: Test swagger
   */
  testSwaggerApi({} = {}) {
    const { error } = SwaggerTestValidator.testSwaggerApi().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/authorization/v1.0/organization/${this.config.organizationId}/swaggerTest`,
      query_params,
      undefined
    );
  }
}
module.exports = SwaggerTest;
