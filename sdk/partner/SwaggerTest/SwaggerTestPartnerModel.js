const Joi = require("joi");

class SwaggerTestModel {
  static TestResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }
}
module.exports = SwaggerTestModel;
