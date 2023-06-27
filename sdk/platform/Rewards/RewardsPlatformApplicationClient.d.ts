export = Rewards;
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {RewardsPlatformApplicationValidator.getGiveawayById} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name getGiveawayById
     * @summary: Get giveaway by ID.
     * @description: Retrieve the specific giveaway by giveaway ID. It will show all the details of the requested giveaway.
     */
    getGiveawayById({ id }?: RewardsPlatformApplicationValidator.getGiveawayById): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.getOfferByName} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Fetch a offer by its name
     * @description: Fetch the specific offer details and configuration by the name of the offer.
     */
    getOfferByName({ name }?: RewardsPlatformApplicationValidator.getOfferByName): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.getRewardsConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<RewardsPlatformModel.ConfigurationRes>} - Success response
     * @name getRewardsConfiguration
     * @summary: Get all valid android paths
     * @description: Use this API to get a list of valid android paths required by the Rewards INIT API to validate a fraudulent device.
     */
    getRewardsConfiguration({}?: any): Promise<RewardsPlatformModel.ConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.getUserDetails} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.UserRes>} - Success response
     * @name getUserDetails
     * @summary: Get user reward details
     * @description: Fetches the user details and the user reward details with their current reward points for the specific user.
     */
    getUserDetails({ userId }?: RewardsPlatformApplicationValidator.getUserDetails): Promise<RewardsPlatformModel.UserRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.getUserPointsHistory} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.HistoryRes>} - Success response
     * @name getUserPointsHistory
     * @summary: Get all transactions of reward points
     * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
     */
    getUserPointsHistory({ userId, pageId, pageSize, }?: RewardsPlatformApplicationValidator.getUserPointsHistory): Promise<RewardsPlatformModel.HistoryRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Paginator<RewardsPlatformModel.HistoryRes>}
     * @summary: Get all transactions of reward points
     * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
     */
    getUserPointsHistoryPaginator({ userId, companyId, applicationId, pageSize, }?: {
        userId: string;
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<RewardsPlatformModel.HistoryRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.saveGiveAway} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name saveGiveAway
     * @summary: List of giveaways of the current application.
     * @description: Creates a new giveaway in the current application, specifying the target audience, points allocation, as well as the name and display name of the giveaway.
     */
    saveGiveAway({ body }?: RewardsPlatformApplicationValidator.saveGiveAway): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.setRewardsConfiguration} arg
     *   - Arg object
     *
     * @returns {Promise<RewardsPlatformModel.SetConfigurationRes>} - Success response
     * @name setRewardsConfiguration
     * @summary: Updates the collection with given android paths.
     * @description: Updates the configuration or inserts new records with the given android paths.
     */
    setRewardsConfiguration({ body }?: RewardsPlatformApplicationValidator.setRewardsConfiguration): Promise<RewardsPlatformModel.SetConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.showGiveaways} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.GiveawayResponse>} - Success response
     * @name showGiveaways
     * @summary: List of giveaways of the current application.
     * @description: Fetch the detailed compilation of live, completed, and scheduled point-based giveaways created.
     */
    showGiveaways({ pageId, pageSize }?: RewardsPlatformApplicationValidator.showGiveaways): Promise<RewardsPlatformModel.GiveawayResponse>;
    /**
     * @param {RewardsPlatformApplicationValidator.showOffers} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Offer[]>} - Success response
     * @name showOffers
     * @summary: List of offers of the current application.
     * @description: Retrieve the list of offers within the current application, including order_discount, order, sign_up, and referral, along with their respective details.
     */
    showOffers({}?: any): Promise<RewardsPlatformModel.Offer[]>;
    /**
     * @param {RewardsPlatformApplicationValidator.updateGiveAway} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name updateGiveAway
     * @summary: Updates the giveaway by it's ID.
     * @description: Make the necessary updates to the giveaway based on its giveaway ID.
     */
    updateGiveAway({ id, body }?: RewardsPlatformApplicationValidator.updateGiveAway): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.updateOfferByName} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name updateOfferByName
     * @summary: Update offer by name
     * @description: Update the specific offer details and its configuration by offer name.
     */
    updateOfferByName({ name, body, }?: RewardsPlatformApplicationValidator.updateOfferByName): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.updateUserStatus} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.AppUser>} - Success response
     * @name updateUserStatus
     * @summary: Update user status
     * @description: Update the user status by marking them as a block or unblock. It can be done by changing the active flag in request body.
     */
    updateUserStatus({ userId, body, }?: RewardsPlatformApplicationValidator.updateUserStatus): Promise<RewardsPlatformModel.AppUser>;
}
import RewardsPlatformApplicationValidator = require("./RewardsPlatformApplicationValidator");
import RewardsPlatformModel = require("./RewardsPlatformModel");
import Paginator = require("../../common/Paginator");
