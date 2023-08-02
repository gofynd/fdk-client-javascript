export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllCountries: string;
        getCountries: string;
        getCountry: string;
        getLocalities: string;
        getLocality: string;
        getOptimalLocations: string;
        getPincodeCity: string;
        getPincodeZones: string;
        getTatProduct: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CountryListResponse>} - Success response
     * @summary: Get Country List
     * @description: Get all countries
     */
    getAllCountries({}?: any): Promise<CountryListResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.onboarding] - Only fetch countries which allowed
     *   for onboard on Platform.
     * @returns {Promise<GetCountries>} - Success response
     * @summary: Get all countries and associated data.
     * @description: Retrieve of all countries.
     */
    getCountries({ onboarding }?: {
        onboarding?: boolean;
    }): Promise<GetCountries>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.countryIsoCode - The `country_iso_code` is ISO-2
     *   (alpha-2) code for the country.
     * @returns {Promise<GetCountry>} - Success response
     * @summary: Get single country and associated data.
     * @description: Retrieve data for a single country and address format.
     */
    getCountry({ countryIsoCode }?: {
        countryIsoCode: string;
    }): Promise<GetCountry>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.localityType - A `locality_type` contains unique
     *   geographical division.
     * @param {string} [arg.country] - A `country` contains a specific value of
     *   the country iso2 code.
     * @param {string} [arg.state] - A `state` contains a specific value of the
     *   state, province.
     * @param {string} [arg.city] - A `city` contains a specific value of the city.
     * @returns {Promise<GetLocalities>} - Success response
     * @summary: Get Localities.
     * @description: Get Localities data.
     */
    getLocalities({ localityType, country, state, city }?: {
        localityType: string;
        country?: string;
        state?: string;
        city?: string;
    }): Promise<GetLocalities>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.localityType - A `locality_type` contains value
     *   geographical division.
     * @param {string} arg.localityValue - A `locality_value` contains a
     *   specific value of the locality.
     * @param {string} [arg.country] - A `country` contains a specific value of
     *   the country iso2 code.
     * @param {string} [arg.state] - A `state` contains a specific value of the
     *   state, province.
     * @param {string} [arg.city] - A `city` contains a specific value of the city.
     * @returns {Promise<GetLocality>} - Success response
     * @summary: Get Locality API
     * @description: Get Locality data
     */
    getLocality({ localityType, localityValue, country, state, city, }?: {
        localityType: string;
        localityValue: string;
        country?: string;
        state?: string;
        city?: string;
    }): Promise<GetLocality>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReAssignStoreRequest} arg.body
     * @returns {Promise<ReAssignStoreResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getOptimalLocations({ body }?: {
        body: ReAssignStoreRequest;
    }): Promise<ReAssignStoreResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - A `pincode` contains a specific address of
     *   a location.
     * @returns {Promise<PincodeApiResponse>} - Success response
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): Promise<PincodeApiResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetZoneFromPincodeViewRequest} arg.body
     * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
     * @summary: GET zone from the Pincode.
     * @description: This API returns zone from the Pincode View.
     */
    getPincodeZones({ body }?: {
        body: GetZoneFromPincodeViewRequest;
    }): Promise<GetZoneFromPincodeViewResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TATViewRequest} arg.body
     * @returns {Promise<TATViewResponse>} - Success response
     * @summary: Get TAT API
     * @description: Get TAT data
     */
    getTatProduct({ body }?: {
        body: TATViewRequest;
    }): Promise<TATViewResponse>;
}
