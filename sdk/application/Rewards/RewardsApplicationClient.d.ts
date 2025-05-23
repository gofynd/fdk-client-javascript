export = Rewards;
declare class Rewards {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        catalogueOrder: string;
        getOfferByName: string;
        getOrderDiscount: string;
        getUserPoints: string;
        getUserPointsHistory: string;
        getUserReferralDetails: string;
        redeemReferralCode: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<CatalogueOrderDetails>} - Success response
     * @name catalogueOrder
     * @summary: Order from catalogue
     * @description: Place a reward on order items available in the catalogue. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/catalogueOrder/).
     */
    catalogueOrder({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<CatalogueOrderDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<Offer>} - Success response
     * @name getOfferByName
     * @summary: Get specific offer
     * @description: Retrieves detailed information about an offer by its name. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/getOfferByName/).
     */
    getOfferByName({ name, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options, ...args: any[]): Promise<Offer>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<OrderDiscountDetails>} - Success response
     * @name getOrderDiscount
     * @summary: Order discount
     * @description: Retrieve the discount applied to a specific order. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/getOrderDiscount/).
     */
    getOrderDiscount({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<OrderDiscountDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PointsDetails>} - Success response
     * @name getUserPoints
     * @summary: Current points
     * @description: Retrieves the current reward points balance for the user. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/getUserPoints/).
     */
    getUserPoints({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PointsDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<PointsHistoryDetails>} - Success response
     * @name getUserPointsHistory
     * @summary: Points history
     * @description: Gets the historical data of points earned or spent by the user. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ pageId, pageSize, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<PointsHistoryDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<ReferralDetails>} - Success response
     * @name getUserReferralDetails
     * @summary: Referral details
     * @description: Gets the details of the user’s referral status and codes. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/getUserReferralDetails/).
     */
    getUserReferralDetails({ requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<ReferralDetails>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RedeemReferralCodeDetails>} - Success response
     * @name redeemReferralCode
     * @summary: Redeem code
     * @description: Applies a referral code to earn or redeem rewards. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/application/rewards/redeemReferralCode/).
     */
    redeemReferralCode({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<RedeemReferralCodeDetails>;
}
