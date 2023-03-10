export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getPincodeCity: string;
        getTatProduct: string;
        getAllCountries: string;
        getPincodeZones: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - A `pincode` contains a specific address of
     *   a location.
     * @param {string} [arg.countryCode] - A 3 alphabetic country code
     * @returns {Promise<PincodeApiResponse>} - Success response
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeCity({ pincode, countryCode }?: {
        pincode: string;
        countryCode?: string;
    }): Promise<PincodeApiResponse>;
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
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company id` unique id for the company.
     * @param {string} arg.applicationId - A `application id` is unique id for
     *   the application.
     * @returns {Promise<CountryListResponse>} - Success response
     * @summary: Get Country List
     * @description: Get all countries
     */
    getAllCountries({ companyId, applicationId }?: {
        companyId: string;
        applicationId: string;
    }): Promise<CountryListResponse>;
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
}
