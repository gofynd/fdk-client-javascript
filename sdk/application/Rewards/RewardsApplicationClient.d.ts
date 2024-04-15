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
     * @param {RewardsApplicationValidator.CatalogueOrderParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.CatalogueOrderResponse>} -
     *   Success response
     * @name catalogueOrder
     * @summary: Order from catalogue
     * @description: Place an reward on order items available in the catalogue. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/catalogueOrder/).
     */
    catalogueOrder({ body, requestHeaders }?: RewardsApplicationValidator.CatalogueOrderParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.CatalogueOrderResponse>;
    /**
     * @param {RewardsApplicationValidator.GetOfferByNameParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Fetch specific offer
     * @description: Retrieves detailed information about an offer by its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOfferByName/).
     */
    getOfferByName({ name, requestHeaders }?: RewardsApplicationValidator.GetOfferByNameParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.Offer>;
    /**
     * @param {RewardsApplicationValidator.GetOrderDiscountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.OrderDiscountResponse>} -
     *   Success response
     * @name getOrderDiscount
     * @summary: Order discount
     * @description: Retrieve the discount applied to a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOrderDiscount/).
     */
    getOrderDiscount({ body, requestHeaders }?: RewardsApplicationValidator.GetOrderDiscountParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.OrderDiscountResponse>;
    /**
     * @param {RewardsApplicationValidator.GetUserPointsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.PointsResponse>} - Success response
     * @name getUserPoints
     * @summary: Current points
     * @description: Retrieves the current reward points balance for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPoints/).
     */
    getUserPoints({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsApplicationModel.PointsResponse>;
    /**
     * @param {RewardsApplicationValidator.GetUserPointsHistoryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.PointsHistoryResponse>} -
     *   Success response
     * @name getUserPointsHistory
     * @summary: Points history
     * @description: Gets the historical data of points earned or spent by the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ pageId, pageSize, requestHeaders }?: RewardsApplicationValidator.GetUserPointsHistoryParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.PointsHistoryResponse>;
    /**
     * @param {RewardsApplicationValidator.GetUserReferralDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.ReferralDetailsResponse>} -
     *   Success response
     * @name getUserReferralDetails
     * @summary: Referral details
     * @description: Gets the details of the user’s referral status and codes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserReferralDetails/).
     */
    getUserReferralDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsApplicationModel.ReferralDetailsResponse>;
    /**
     * @param {RewardsApplicationValidator.RedeemReferralCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.RedeemReferralCodeResponse>} -
     *   Success response
     * @name redeemReferralCode
     * @summary: Redeem code
     * @description: Applies a referral code to earn or redeem rewards. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/redeemReferralCode/).
     */
    redeemReferralCode({ body, requestHeaders }?: RewardsApplicationValidator.RedeemReferralCodeParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.RedeemReferralCodeResponse>;
}
import RewardsApplicationValidator = require("./RewardsApplicationValidator");
import RewardsApplicationModel = require("./RewardsApplicationModel");
