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
     * @param {RewardsApplicationValidator.catalogueOrder} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.CatalogueOrderResponse>} -
     *   Success response
     * @name catalogueOrder
     * @summary: Get all transactions of reward points
     * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
     */
    catalogueOrder({ body }?: RewardsApplicationValidator.catalogueOrder): Promise<RewardsApplicationModel.CatalogueOrderResponse>;
    /**
     * @param {RewardsApplicationValidator.getOfferByName} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Get offer by name
     * @description: Use this API to get fetch the specific offer details and configuration by the name of the offer.
     */
    getOfferByName({ name }?: RewardsApplicationValidator.getOfferByName): Promise<RewardsApplicationModel.Offer>;
    /**
     * @param {RewardsApplicationValidator.getOrderDiscount} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.OrderDiscountResponse>} -
     *   Success response
     * @name getOrderDiscount
     * @summary: Calculates the discount on order-amount
     * @description: Use this API to calculate the discount on the order amount, based on all the amount range configured in Order Discount offer.
     */
    getOrderDiscount({ body }?: RewardsApplicationValidator.getOrderDiscount): Promise<RewardsApplicationModel.OrderDiscountResponse>;
    /**
     * @param {RewardsApplicationValidator.getUserPoints} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.PointsResponse>} - Success response
     * @name getUserPoints
     * @summary: Get total available points of a user
     * @description: Use this API to retrieve total available points of a user for current application.
     */
    getUserPoints({}?: any): Promise<RewardsApplicationModel.PointsResponse>;
    /**
     * @param {RewardsApplicationValidator.getUserPointsHistory} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.PointsHistoryResponse>} -
     *   Success response
     * @name getUserPointsHistory
     * @summary: Get all transactions of reward points
     * @description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
     */
    getUserPointsHistory({ pageId, pageSize }?: RewardsApplicationValidator.getUserPointsHistory): Promise<RewardsApplicationModel.PointsHistoryResponse>;
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
     * @param {RewardsApplicationValidator.getUserReferralDetails} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.ReferralDetailsResponse>} -
     *   Success response
     * @name getUserReferralDetails
     * @summary: Get referral details of a user
     * @description: Use this API to retrieve the referral details like referral code of a user.
     */
    getUserReferralDetails({}?: any): Promise<RewardsApplicationModel.ReferralDetailsResponse>;
    /**
     * @param {RewardsApplicationValidator.redeemReferralCode} arg - Arg object.
     * @returns {Promise<RewardsApplicationModel.RedeemReferralCodeResponse>} -
     *   Success response
     * @name redeemReferralCode
     * @summary: Redeems a referral code and credits reward points to referee and the referrer as per the configuration
     * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
     */
    redeemReferralCode({ body }?: RewardsApplicationValidator.redeemReferralCode): Promise<RewardsApplicationModel.RedeemReferralCodeResponse>;
}
import RewardsApplicationValidator = require("./RewardsApplicationValidator");
import RewardsApplicationModel = require("./RewardsApplicationModel");
import Paginator = require("../../common/Paginator");
