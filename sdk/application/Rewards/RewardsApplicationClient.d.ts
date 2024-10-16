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
     * @returns {Promise<RewardsApplicationModel.CatalogueOrderDetails>} -
     *   Success response
     * @name catalogueOrder
     * @summary: Order from catalogue
     * @description: Place a reward on order items available in the catalogue. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/catalogueOrder/).
     */
    catalogueOrder({ body, requestHeaders }?: RewardsApplicationValidator.CatalogueOrderParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.CatalogueOrderDetails>;
    /**
     * @param {RewardsApplicationValidator.GetOfferByNameParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Get specific offer
     * @description: Retrieves detailed information about an offer by its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOfferByName/).
     */
    getOfferByName({ name, requestHeaders }?: RewardsApplicationValidator.GetOfferByNameParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.Offer>;
    /**
     * @param {RewardsApplicationValidator.GetOrderDiscountParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.OrderDiscountDetails>} - Success response
     * @name getOrderDiscount
     * @summary: Order discount
     * @description: Retrieve the discount applied to a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOrderDiscount/).
     */
    getOrderDiscount({ body, requestHeaders }?: RewardsApplicationValidator.GetOrderDiscountParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.OrderDiscountDetails>;
    /**
     * @param {RewardsApplicationValidator.GetUserPointsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.PointsDetails>} - Success response
     * @name getUserPoints
     * @summary: Current points
     * @description: Retrieves the current reward points balance for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPoints/).
     */
    getUserPoints({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsApplicationModel.PointsDetails>;
    /**
     * @param {RewardsApplicationValidator.GetUserPointsHistoryParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.PointsHistoryDetails>} - Success response
     * @name getUserPointsHistory
     * @summary: Points history
     * @description: Gets the historical data of points earned or spent by the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ pageId, pageSize, requestHeaders }?: RewardsApplicationValidator.GetUserPointsHistoryParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.PointsHistoryDetails>;
    /**
     * @param {RewardsApplicationValidator.GetUserReferralDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.ReferralDetails>} - Success response
     * @name getUserReferralDetails
     * @summary: Referral details
     * @description: Gets the details of the user’s referral status and codes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserReferralDetails/).
     */
    getUserReferralDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsApplicationModel.ReferralDetails>;
    /**
     * @param {RewardsApplicationValidator.RedeemReferralCodeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.RedeemReferralCodeDetails>} -
     *   Success response
     * @name redeemReferralCode
     * @summary: Redeem code
     * @description: Applies a referral code to earn or redeem rewards. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/redeemReferralCode/).
     */
    redeemReferralCode({ body, requestHeaders }?: RewardsApplicationValidator.RedeemReferralCodeParam, { responseHeaders }?: object): Promise<RewardsApplicationModel.RedeemReferralCodeDetails>;
}
import RewardsApplicationValidator = require("./RewardsApplicationValidator");
import RewardsApplicationModel = require("./RewardsApplicationModel");
