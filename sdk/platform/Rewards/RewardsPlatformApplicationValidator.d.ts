export = RewardsPlatformApplicationValidator;
/**
 * @typedef getGiveawayById
 * @property {string} id - Giveaway ID
 */
/**
 * @typedef getOfferByName
 * @property {string} name - The name given to the offer.
 */
/** @typedef getRewardsConfiguration */
/**
 * @typedef getUserDetails
 * @property {string} userId - User id
 */
/**
 * @typedef getUserPointsHistory
 * @property {string} userId - User id
 * @property {string} [pageId] - PageID is the ID of the requested page. For
 *   first request it should be kept empty.
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 */
/**
 * @typedef saveGiveAway
 * @property {RewardsPlatformModel.Giveaway} body
 */
/**
 * @typedef setRewardsConfiguration
 * @property {RewardsPlatformModel.ConfigurationRequest} body
 */
/**
 * @typedef showGiveaways
 * @property {string} pageId - Pagination page id
 * @property {number} pageSize - Pagination page size
 */
/** @typedef showOffers */
/**
 * @typedef updateGiveAway
 * @property {string} id - Giveaway ID
 * @property {RewardsPlatformModel.Giveaway} body
 */
/**
 * @typedef updateOfferByName
 * @property {string} name - The name given to the offer.
 * @property {RewardsPlatformModel.Offer} body
 */
/**
 * @typedef updateUserStatus
 * @property {string} userId - User id
 * @property {RewardsPlatformModel.AppUser} body
 */
declare class RewardsPlatformApplicationValidator {
}
declare namespace RewardsPlatformApplicationValidator {
    export { getGiveawayById, getOfferByName, getRewardsConfiguration, getUserDetails, getUserPointsHistory, saveGiveAway, setRewardsConfiguration, showGiveaways, showOffers, updateGiveAway, updateOfferByName, updateUserStatus };
}
/** @returns {getGiveawayById} */
declare function getGiveawayById(): getGiveawayById;
type getGiveawayById = {
    /**
     * - Giveaway ID
     */
    id: string;
};
/** @returns {getOfferByName} */
declare function getOfferByName(): getOfferByName;
type getOfferByName = {
    /**
     * - The name given to the offer.
     */
    name: string;
};
/** @returns {getRewardsConfiguration} */
declare function getRewardsConfiguration(): any;
type getRewardsConfiguration = any;
/** @returns {getUserDetails} */
declare function getUserDetails(): getUserDetails;
type getUserDetails = {
    /**
     * - User id
     */
    userId: string;
};
/** @returns {getUserPointsHistory} */
declare function getUserPointsHistory(): getUserPointsHistory;
type getUserPointsHistory = {
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
/** @returns {saveGiveAway} */
declare function saveGiveAway(): saveGiveAway;
type saveGiveAway = {
    body: RewardsPlatformModel.Giveaway;
};
/** @returns {setRewardsConfiguration} */
declare function setRewardsConfiguration(): setRewardsConfiguration;
type setRewardsConfiguration = {
    body: RewardsPlatformModel.ConfigurationRequest;
};
/** @returns {showGiveaways} */
declare function showGiveaways(): showGiveaways;
type showGiveaways = {
    /**
     * - Pagination page id
     */
    pageId: string;
    /**
     * - Pagination page size
     */
    pageSize: number;
};
/** @returns {showOffers} */
declare function showOffers(): any;
type showOffers = any;
/** @returns {updateGiveAway} */
declare function updateGiveAway(): updateGiveAway;
type updateGiveAway = {
    /**
     * - Giveaway ID
     */
    id: string;
    body: RewardsPlatformModel.Giveaway;
};
/** @returns {updateOfferByName} */
declare function updateOfferByName(): updateOfferByName;
type updateOfferByName = {
    /**
     * - The name given to the offer.
     */
    name: string;
    body: RewardsPlatformModel.Offer;
};
/** @returns {updateUserStatus} */
declare function updateUserStatus(): updateUserStatus;
type updateUserStatus = {
    /**
     * - User id
     */
    userId: string;
    body: RewardsPlatformModel.AppUser;
};
import RewardsPlatformModel = require("./RewardsPlatformModel");
