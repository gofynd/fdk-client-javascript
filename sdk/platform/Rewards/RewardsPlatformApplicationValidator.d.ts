export = RewardsPlatformApplicationValidator;
/**
 * @typedef GetGiveawayByIdParam
 * @property {string} id - Giveaway ID
 */
/**
 * @typedef GetOfferByNameParam
 * @property {string} name - The name given to the offer.
 */
/** @typedef GetRewardsConfigurationParam */
/**
 * @typedef GetUserDetailsParam
 * @property {string} userId - User id
 */
/**
 * @typedef GetUserPointsHistoryParam
 * @property {string} userId - User id
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef SaveGiveAwayParam
 * @property {RewardsPlatformModel.Giveaway} body
 */
/**
 * @typedef SetRewardsConfigurationParam
 * @property {RewardsPlatformModel.ConfigurationRequest} body
 */
/**
 * @typedef ShowGiveawaysParam
 * @property {string} pageId - Pagination page id
 * @property {number} pageSize - Pagination page size
 */
/** @typedef ShowOffersParam */
/**
 * @typedef UpdateGiveAwayParam
 * @property {string} id - Giveaway ID
 * @property {RewardsPlatformModel.Giveaway} body
 */
/**
 * @typedef UpdateOfferByNameParam
 * @property {string} name - The name given to the offer.
 * @property {RewardsPlatformModel.Offer} body
 */
/**
 * @typedef UpdateUserStatusParam
 * @property {string} userId - User id
 * @property {RewardsPlatformModel.AppUser} body
 */
declare class RewardsPlatformApplicationValidator {
    /** @returns {GetGiveawayByIdParam} */
    static getGiveawayById(): GetGiveawayByIdParam;
    /** @returns {GetOfferByNameParam} */
    static getOfferByName(): GetOfferByNameParam;
    /** @returns {GetRewardsConfigurationParam} */
    static getRewardsConfiguration(): any;
    /** @returns {GetUserDetailsParam} */
    static getUserDetails(): GetUserDetailsParam;
    /** @returns {GetUserPointsHistoryParam} */
    static getUserPointsHistory(): GetUserPointsHistoryParam;
    /** @returns {SaveGiveAwayParam} */
    static saveGiveAway(): SaveGiveAwayParam;
    /** @returns {SetRewardsConfigurationParam} */
    static setRewardsConfiguration(): SetRewardsConfigurationParam;
    /** @returns {ShowGiveawaysParam} */
    static showGiveaways(): ShowGiveawaysParam;
    /** @returns {ShowOffersParam} */
    static showOffers(): any;
    /** @returns {UpdateGiveAwayParam} */
    static updateGiveAway(): UpdateGiveAwayParam;
    /** @returns {UpdateOfferByNameParam} */
    static updateOfferByName(): UpdateOfferByNameParam;
    /** @returns {UpdateUserStatusParam} */
    static updateUserStatus(): UpdateUserStatusParam;
}
declare namespace RewardsPlatformApplicationValidator {
    export { GetGiveawayByIdParam, GetOfferByNameParam, GetRewardsConfigurationParam, GetUserDetailsParam, GetUserPointsHistoryParam, SaveGiveAwayParam, SetRewardsConfigurationParam, ShowGiveawaysParam, ShowOffersParam, UpdateGiveAwayParam, UpdateOfferByNameParam, UpdateUserStatusParam };
}
type GetGiveawayByIdParam = {
    /**
     * - Giveaway ID
     */
    id: string;
};
type GetOfferByNameParam = {
    /**
     * - The name given to the offer.
     */
    name: string;
};
type GetUserDetailsParam = {
    /**
     * - User id
     */
    userId: string;
};
type GetUserPointsHistoryParam = {
    /**
     * - User id
     */
    userId: string;
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
type SaveGiveAwayParam = {
    body: RewardsPlatformModel.Giveaway;
};
type SetRewardsConfigurationParam = {
    body: RewardsPlatformModel.ConfigurationRequest;
};
type ShowGiveawaysParam = {
    /**
     * - Pagination page id
     */
    pageId: string;
    /**
     * - Pagination page size
     */
    pageSize: number;
};
type UpdateGiveAwayParam = {
    /**
     * - Giveaway ID
     */
    id: string;
    body: RewardsPlatformModel.Giveaway;
};
type UpdateOfferByNameParam = {
    /**
     * - The name given to the offer.
     */
    name: string;
    body: RewardsPlatformModel.Offer;
};
type UpdateUserStatusParam = {
    /**
     * - User id
     */
    userId: string;
    body: RewardsPlatformModel.AppUser;
};
type GetRewardsConfigurationParam = any;
type ShowOffersParam = any;
import RewardsPlatformModel = require("./RewardsPlatformModel");
