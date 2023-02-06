const Joi = require("joi");
const LogisticModel = require("./LogisticPlatformModel");

class LogisticValidator {
  static getApplicationServiceability() {
    return Joi.object({}).required();
  }

  static upsertZoneControllerView() {
    return Joi.object({
      body: LogisticModel.GetZoneFromPincodeViewRequest().required(),
    }).required();
  }
}

module.exports = LogisticValidator;
