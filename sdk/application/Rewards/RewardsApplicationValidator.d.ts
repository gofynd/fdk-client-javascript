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
    /** @returns {CatalogueOrderParam} */
    static catalogueOrder(): CatalogueOrderParam;
    /** @returns {GetOfferByNameParam} */
    static getOfferByName(): GetOfferByNameParam;
    /** @returns {GetOrderDiscountParam} */
    static getOrderDiscount(): GetOrderDiscountParam;
    /** @returns {GetUserPointsParam} */
    static getUserPoints(): any;
    /** @returns {GetUserPointsHistoryParam} */
    static getUserPointsHistory(): GetUserPointsHistoryParam;
    /** @returns {GetUserReferralDetailsParam} */
    static getUserReferralDetails(): any;
    /** @returns {RedeemReferralCodeParam} */
    static redeemReferralCode(): RedeemReferralCodeParam;
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
type RedeemReferralCodeParam = {
    body: RewardsApplicationModel.RedeemReferralCodeRequest;
};
type GetUserPointsParam = any;
type GetUserReferralDetailsParam = any;
import RewardsApplicationModel = require("sdk/output/javascript/code/sdk/application/Rewards/RewardsApplicationModel");
