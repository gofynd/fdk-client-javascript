export = Rewards;
declare class Rewards {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getOfferByName: string;
        getOrderDiscount: string;
        getPointsOnProduct: string;
        getUserPoints: string;
        getUserPointsHistory: string;
        getUserReferralDetails: string;
        redeemReferralCode: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @returns {Promise<Offer>} - Success response
     * @summary: Get offer by name
     * @description: Use this API to get the offer details and configuration by entering the name of the offer.
     */
    getOfferByName({ name }?: {
        name: string;
    }): Promise<Offer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderDiscountRequest} arg.body
     * @returns {Promise<OrderDiscountResponse>} - Success response
     * @summary: Calculates the discount on order-amount
     * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
     */
    getOrderDiscount({ body }?: {
        body: OrderDiscountRequest;
    }): Promise<OrderDiscountResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CatalogueOrderRequest} arg.body
     * @returns {Promise<CatalogueOrderResponse>} - Success response
     * @summary: Get the eligibility of reward points on a product
     * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
     */
    getPointsOnProduct({ body }?: {
        body: CatalogueOrderRequest;
    }): Promise<CatalogueOrderResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<PointsResponse>} - Success response
     * @summary: Get reward points available with a user
     * @description: Use this API to retrieve total available points of a user for current application
     */
    getUserPoints({}?: any): Promise<PointsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<PointsHistoryResponse>} - Success response
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions. The list of points history is paginated.
     */
    getUserPointsHistory({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): Promise<PointsHistoryResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions. The list of points history is paginated.
     */
    getUserPointsHistoryPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ReferralDetailsResponse>} - Success response
     * @summary: Get referral details of a user
     * @description: Use this API to retrieve the referral details a user has configured in the application.
     */
    getUserReferralDetails({}?: any): Promise<ReferralDetailsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RedeemReferralCodeRequest} arg.body
     * @returns {Promise<RedeemReferralCodeResponse>} - Success response
     * @summary: Redeems a referral code and credits reward points to users
     * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
     */
    redeemReferralCode({ body }?: {
        body: RedeemReferralCodeRequest;
    }): Promise<RedeemReferralCodeResponse>;
}
import Paginator = require("../../common/Paginator");
