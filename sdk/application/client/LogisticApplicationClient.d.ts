export = Logistic;
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getTatProduct: string;
        getPincodeCity: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetTatProductReqBody} arg.body
     * @returns {Promise<GetTatProductResponse>} - Success response
     * @summary: Get TAT of a product
     * @description: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
     */
    getTatProduct({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
     * @returns {Promise<GetPincodeCityResponse>} - Success response
     * @summary: Get city from PIN Code
     * @description: Use this API to retrieve a city by its PIN Code.
     */
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): Promise<any>;
}
