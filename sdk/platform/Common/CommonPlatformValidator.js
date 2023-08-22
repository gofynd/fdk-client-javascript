const Joi = require("joi");

const CommonPlatformModel = require("./CommonPlatformModel");

/**
 * @typedef GetLocationsParam
 * @property {string} [locationType]
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of the country. If querying for city,
 *   provide id of the state.
 */

/**
 * @typedef SearchApplicationParam
 * @property {string} [authorization]
 * @property {string} [query] - Provide application name
 */

class CommonPlatformValidator {
  /** @returns {GetLocationsParam} */
  static getLocations() {
    return Joi.object({
      locationType: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {SearchApplicationParam} */
  static searchApplication() {
    return Joi.object({
      authorization: Joi.string().allow(""),
      query: Joi.string().allow(""),
    });
  }
}

module.exports = CommonPlatformValidator;
