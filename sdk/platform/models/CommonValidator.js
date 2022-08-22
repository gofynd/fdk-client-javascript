const Joi = require("joi");
const Validator = require("../PlatformModels");
class CommonValidator {
  static searchApplication() {
    return Joi.object({
      authorization: Joi.string().allow(""),
      query: Joi.string().allow(""),
    });
  }

  static getLocations() {
    return Joi.object({
      locationType: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }
}
module.exports = CommonValidator;
