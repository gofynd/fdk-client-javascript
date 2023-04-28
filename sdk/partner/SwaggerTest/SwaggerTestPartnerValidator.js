const Joi = require("joi");

const SwaggerTestModel = require("./SwaggerTestPartnerModel");
class SwaggerTestValidator {
  static testSwaggerApi() {
    return Joi.object({}).required();
  }
}

module.exports = SwaggerTestValidator;
