/**
 * Represents the location object for validation.
 */
export type LocationObject = {
    /**
     * - The pincode of the location.
     */
    pincode: string;
    /**
     * - The country of the location.
     */
    country: string;
    /**
     * - The ISO code of the country.
     */
    country_iso_code: string;
    /**
     * - The city of the location.
     */
    city: string;
    /**
     * - The geographical coordinates of the location.
     */
    location: {
        longitude: string;
        latitude: string;
    };
};
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
export class LocationValidator {
    /**
     * Validates the location object.
     *
     * @returns {LocationObject} - The location object schema for validation.
     */
    static validateLocationObj(): LocationObject;
}
