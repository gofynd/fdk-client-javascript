const Joi = require("joi");

const CommonModel = require("./CommonApplicationModel");
class CommonValidator {
  static getLocations() {
    return Joi.object({
      locationType: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  static searchApplication() {
    return Joi.object({
      authorization: Joi.string().allow(""),
      query: Joi.string().allow(""),
    });
  }
}

module.exports = CommonValidator;
