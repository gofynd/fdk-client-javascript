const Joi = require("joi");

/**
 * Represents the location object for validation.
 *
 * @typedef {Object} LocationObject
 * @property {string} pincode - The pincode of the location.
 * @property {string} country - The country of the location.
 * @property {string} country_iso_code - The ISO code of the country.
 * @property {string} city - The city of the location.
 * @property {Object} location - The geographical coordinates of the location.
 * @property {string} location.longitude - The longitude of the location.
 * @property {string} location.latitude - The latitude of the location.
 */

class LocationValidator {
  /**
   * Validates the location object.
   *
   * @returns {LocationObject} - The location object schema for validation.
   */
  static validateLocationObj() {
    return Joi.object({
      pincode: Joi.string(),
      country: Joi.string(),
      country_iso_code: Joi.string(),
      city: Joi.string(),
      location: Joi.object({
        longitude: Joi.string(),
        latitude: Joi.string(),
      }),
    });
  }
}

module.exports = {
  LocationValidator,
};
