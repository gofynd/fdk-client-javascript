export = RewardsApplicationValidator;
/**
 * @typedef catalogueOrder
 * @property {RewardsApplicationModel.CatalogueOrderRequest} body
 */
/**
 * @typedef getOfferByName
 * @property {string} name - The name given to the offer.
 */
/**
 * @typedef getOrderDiscount
 * @property {RewardsApplicationModel.OrderDiscountRequest} body
 */
/** @typedef getUserPoints */
/**
 * @typedef getUserPointsHistory
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/** @typedef getUserReferralDetails */
/**
 * @typedef redeemReferralCode
 * @property {RewardsApplicationModel.RedeemReferralCodeRequest} body
 */
declare class RewardsApplicationValidator {
}
declare namespace RewardsApplicationValidator {
    export { catalogueOrder, getOfferByName, getOrderDiscount, getUserPoints, getUserPointsHistory, getUserReferralDetails, redeemReferralCode };
}
/** @returns {catalogueOrder} */
declare function catalogueOrder(): catalogueOrder;
type catalogueOrder = {
    body: RewardsApplicationModel.CatalogueOrderRequest;
};
/** @returns {getOfferByName} */
declare function getOfferByName(): getOfferByName;
type getOfferByName = {
    /**
     * - The name given to the offer.
     */
    name: string;
};
/** @returns {getOrderDiscount} */
declare function getOrderDiscount(): getOrderDiscount;
type getOrderDiscount = {
    body: RewardsApplicationModel.OrderDiscountRequest;
};
/** @returns {getUserPoints} */
declare function getUserPoints(): any;
type getUserPoints = any;
/** @returns {getUserPointsHistory} */
declare function getUserPointsHistory(): getUserPointsHistory;
type getUserPointsHistory = {
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
/** @returns {getUserReferralDetails} */
declare function getUserReferralDetails(): any;
type getUserReferralDetails = any;
/** @returns {redeemReferralCode} */
declare function redeemReferralCode(): redeemReferralCode;
type redeemReferralCode = {
    body: RewardsApplicationModel.RedeemReferralCodeRequest;
};
import RewardsApplicationModel = require("./RewardsApplicationModel");
