const Joi = require("joi");

const ConfigurationPublicModel = require("./ConfigurationPublicModel");

/**
 * @typedef GetLocationsParam
 * @property {string} [locationType] - Provide location type to query on.
 *   Possible values : country, state, city
 * @property {string} [id] - Field is optional when location_type is country. If
 *   querying for state, provide id of country. If querying for city, provide id
 *   of state.
 */

/**
 * @typedef SearchApplicationParam
 * @property {string} [authorization]
 * @property {string} [query] - Provide application name
 */

class ConfigurationPublicValidator {
  /** @returns {getLocations} */
  static getLocations() {
    return Joi.object({
      locationType: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {searchApplication} */
  static searchApplication() {
    return Joi.object({
      authorization: Joi.string().allow(""),
      query: Joi.string().allow(""),
    });
  }
}

module.exports = ConfigurationPublicValidator;
