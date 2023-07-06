export = RewardsApplicationValidator;
/**
 * @typedef CatalogueOrderParam
 * @property {RewardsApplicationModel.CatalogueOrderRequest} body
 */
/**
 * @typedef GetOfferByNameParam
 * @property {string} name - The name given to the offer.
 */
/**
 * @typedef GetOrderDiscountParam
 * @property {RewardsApplicationModel.OrderDiscountRequest} body
 */
/** @typedef GetUserPointsParam */
/**
 * @typedef GetUserPointsHistoryParam
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef GetUserReferralDetailsParam */
/**
 * @typedef RedeemReferralCodeParam
 * @property {RewardsApplicationModel.RedeemReferralCodeRequest} body
 */
declare class RewardsApplicationValidator {
    /** @returns {catalogueOrder} */
    static catalogueOrder(): catalogueOrder;
    /** @returns {getOfferByName} */
    static getOfferByName(): getOfferByName;
    /** @returns {getOrderDiscount} */
    static getOrderDiscount(): getOrderDiscount;
    /** @returns {getUserPoints} */
    static getUserPoints(): getUserPoints;
    /** @returns {getUserPointsHistory} */
    static getUserPointsHistory(): getUserPointsHistory;
    /** @returns {getUserReferralDetails} */
    static getUserReferralDetails(): getUserReferralDetails;
    /** @returns {redeemReferralCode} */
    static redeemReferralCode(): redeemReferralCode;
}
declare namespace RewardsApplicationValidator {
    export { CatalogueOrderParam, GetOfferByNameParam, GetOrderDiscountParam, GetUserPointsParam, GetUserPointsHistoryParam, GetUserReferralDetailsParam, RedeemReferralCodeParam };
}
type CatalogueOrderParam = {
    body: RewardsApplicationModel.CatalogueOrderRequest;
};
type GetOfferByNameParam = {
    /**
     * - The name given to the offer.
     */
    name: string;
};
type GetOrderDiscountParam = {
    body: RewardsApplicationModel.OrderDiscountRequest;
};
type GetUserPointsParam = any;
type GetUserPointsHistoryParam = {
    /**
     * - PageID is the ID of the requested page. For
     * first request it should be kept empty.
     */
    pageId?: string;
    /**
     * - The number of items to retrieve in each page.
     */
    pageSize?: number;
};
type GetUserReferralDetailsParam = any;
type RedeemReferralCodeParam = {
    body: RewardsApplicationModel.RedeemReferralCodeRequest;
};
import RewardsApplicationModel = require("./RewardsApplicationModel");
