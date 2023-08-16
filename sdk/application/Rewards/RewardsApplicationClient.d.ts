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
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.CatalogueOrderResponse>} -
     *   Success response
     * @name catalogueOrder
     * @summary: Get all transactions of reward points
     * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/catalogueOrder/).
     */
    catalogueOrder({ body }?: RewardsApplicationValidator.CatalogueOrderParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.CatalogueOrderResponse>;
    /**
     * @param {RewardsApplicationValidator.GetOfferByNameParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Get offer by name
     * @description: Use this API to get fetch the specific offer details and configuration by the name of the offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOfferByName/).
     */
    getOfferByName({ name }?: RewardsApplicationValidator.GetOfferByNameParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.Offer>;
    /**
     * @param {RewardsApplicationValidator.GetOrderDiscountParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.OrderDiscountResponse>} -
     *   Success response
     * @name getOrderDiscount
     * @summary: Calculates the discount on order-amount
     * @description: Use this API to calculate the discount on the order amount, based on all the amount range configured in Order Discount offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOrderDiscount/).
     */
    getOrderDiscount({ body }?: RewardsApplicationValidator.GetOrderDiscountParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.OrderDiscountResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.PointsResponse>} - Success response
     * @name getUserPoints
     * @summary: Get total available points of a user
     * @description: Use this API to retrieve total available points of a user for current application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPoints/).
     */
    getUserPoints({ headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.PointsResponse>;
    /**
     * @param {RewardsApplicationValidator.GetUserPointsHistoryParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.PointsHistoryResponse>} -
     *   Success response
     * @name getUserPointsHistory
     * @summary: Get all transactions of reward points
     * @description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ pageId, pageSize }?: RewardsApplicationValidator.GetUserPointsHistoryParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.PointsHistoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<RewardsApplicationModel.PointsHistoryResponse>}
     * @summary: Get all transactions of reward points
     * @description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
     */
    getUserPointsHistoryPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<RewardsApplicationModel.PointsHistoryResponse>;
    /**
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.ReferralDetailsResponse>} -
     *   Success response
     * @name getUserReferralDetails
     * @summary: Get referral details of a user
     * @description: Use this API to retrieve the referral details like referral code of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserReferralDetails/).
     */
    getUserReferralDetails({ headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.ReferralDetailsResponse>;
    /**
     * @param {RewardsApplicationValidator.RedeemReferralCodeParam} arg - Arg object.
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<RewardsApplicationModel.RedeemReferralCodeResponse>} -
     *   Success response
     * @name redeemReferralCode
     * @summary: Redeems a referral code and credits reward points to referee and the referrer as per the configuration
     * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/redeemReferralCode/).
     */
    redeemReferralCode({ body }?: RewardsApplicationValidator.RedeemReferralCodeParam, { headers }?: import("../ApplicationAPIClient").Options): Promise<RewardsApplicationModel.RedeemReferralCodeResponse>;
}
import RewardsApplicationValidator = require("./RewardsApplicationValidator");
import RewardsApplicationModel = require("./RewardsApplicationModel");
import Paginator = require("../../common/Paginator");
