export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getPincodeView: string;
        getTATView: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - A `pincode` contains a specific address of
     *   a location.
     * @param {string} [arg.xApplicationId] - Application id is neccessary for
     *   app authorizations & retrieving config of application
     * @returns {Promise<PincodeApiResponse>} - Success response
     * @summary: Get Pincode API
     * @description: Get pincode data
     */
    getPincodeView({ pincode, xApplicationId }?: {
        pincode: string;
        xApplicationId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.xApplicationId] - Application id is neccessary for
     *   app authorizations & retrieving config of application
     * @param {TATViewRequest} arg.body
     * @returns {Promise<TATViewResponse>} - Success response
     * @summary: Get TAT API
     * @description: Get TAT data
     */
    getTATView({ body, xApplicationId }?: {
        xApplicationId?: string;
        body: any;
    }): Promise<any>;
}
