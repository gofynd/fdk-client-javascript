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
    /** @returns {getGiveawayById} */
    static getGiveawayById(): getGiveawayById;
    /** @returns {getOfferByName} */
    static getOfferByName(): getOfferByName;
    /** @returns {getRewardsConfiguration} */
    static getRewardsConfiguration(): getRewardsConfiguration;
    /** @returns {getUserDetails} */
    static getUserDetails(): getUserDetails;
    /** @returns {getUserPointsHistory} */
    static getUserPointsHistory(): getUserPointsHistory;
    /** @returns {saveGiveAway} */
    static saveGiveAway(): saveGiveAway;
    /** @returns {setRewardsConfiguration} */
    static setRewardsConfiguration(): setRewardsConfiguration;
    /** @returns {showGiveaways} */
    static showGiveaways(): showGiveaways;
    /** @returns {showOffers} */
    static showOffers(): showOffers;
    /** @returns {updateGiveAway} */
    static updateGiveAway(): updateGiveAway;
    /** @returns {updateOfferByName} */
    static updateOfferByName(): updateOfferByName;
    /** @returns {updateUserStatus} */
    static updateUserStatus(): updateUserStatus;
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
type GetRewardsConfigurationParam = any;
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
type ShowOffersParam = any;
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
import RewardsPlatformModel = require("./RewardsPlatformModel");
