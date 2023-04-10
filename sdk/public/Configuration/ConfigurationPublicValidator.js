const Joi = require("joi");

const ConfigurationModel = require("./ConfigurationPublicModel");
class ConfigurationValidator {
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

module.exports = ConfigurationValidator;
