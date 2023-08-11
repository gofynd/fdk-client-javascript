export = Rewards;
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {RewardsPlatformApplicationValidator.GetGiveawayByIdParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name getGiveawayById
     * @summary: Get giveaway by ID.
     * @description: Retrieve the specific giveaway by giveaway ID. It will show all the details of the requested giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getGiveawayById/).
     */
    getGiveawayById({ id }?: RewardsPlatformApplicationValidator.GetGiveawayByIdParam): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetOfferByNameParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Fetch a offer by its name
     * @description: Fetch the specific offer details and configuration by the name of the offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getOfferByName/).
     */
    getOfferByName({ name }?: RewardsPlatformApplicationValidator.GetOfferByNameParam): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetRewardsConfigurationParam} arg
     *   - Arg object
     *
     * @returns {Promise<RewardsPlatformModel.ConfigurationRes>} - Success response
     * @name getRewardsConfiguration
     * @summary: Get all valid android paths
     * @description: Use this API to get a list of valid android paths required by the Rewards INIT API to validate a fraudulent device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getRewardsConfiguration/).
     */
    getRewardsConfiguration({}?: any): Promise<RewardsPlatformModel.ConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetUserDetailsParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.UserRes>} - Success response
     * @name getUserDetails
     * @summary: Get user reward details
     * @description: Fetches the user details and the user reward details with their current reward points for the specific user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserDetails/).
     */
    getUserDetails({ userId }?: RewardsPlatformApplicationValidator.GetUserDetailsParam): Promise<RewardsPlatformModel.UserRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetUserPointsHistoryParam} arg
     *   - Arg object
     *
     * @returns {Promise<RewardsPlatformModel.HistoryRes>} - Success response
     * @name getUserPointsHistory
     * @summary: Get all transactions of reward points
     * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ userId, pageId, pageSize, }?: RewardsPlatformApplicationValidator.GetUserPointsHistoryParam): Promise<RewardsPlatformModel.HistoryRes>;
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
     * @param {RewardsPlatformApplicationValidator.SaveGiveAwayParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name saveGiveAway
     * @summary: List of giveaways of the current application.
     * @description: Creates a new giveaway in the current application, specifying the target audience, points allocation, as well as the name and display name of the giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/saveGiveAway/).
     */
    saveGiveAway({ body }?: RewardsPlatformApplicationValidator.SaveGiveAwayParam): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.SetRewardsConfigurationParam} arg
     *   - Arg object
     *
     * @returns {Promise<RewardsPlatformModel.SetConfigurationRes>} - Success response
     * @name setRewardsConfiguration
     * @summary: Updates the collection with given android paths.
     * @description: Updates the configuration or inserts new records with the given android paths. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/setRewardsConfiguration/).
     */
    setRewardsConfiguration({ body }?: RewardsPlatformApplicationValidator.SetRewardsConfigurationParam): Promise<RewardsPlatformModel.SetConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.ShowGiveawaysParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.GiveawayResponse>} - Success response
     * @name showGiveaways
     * @summary: List of giveaways of the current application.
     * @description: Fetch the detailed compilation of live, completed, and scheduled point-based giveaways created. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showGiveaways/).
     */
    showGiveaways({ pageId, pageSize }?: RewardsPlatformApplicationValidator.ShowGiveawaysParam): Promise<RewardsPlatformModel.GiveawayResponse>;
    /**
     * @param {RewardsPlatformApplicationValidator.ShowOffersParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Offer[]>} - Success response
     * @name showOffers
     * @summary: List of offers of the current application.
     * @description: Retrieve the list of offers within the current application, including order_discount, order, sign_up, and referral, along with their respective details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showOffers/).
     */
    showOffers({}?: any): Promise<RewardsPlatformModel.Offer[]>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateGiveAwayParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name updateGiveAway
     * @summary: Updates the giveaway by it's ID.
     * @description: Make the necessary updates to the giveaway based on its giveaway ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateGiveAway/).
     */
    updateGiveAway({ id, body }?: RewardsPlatformApplicationValidator.UpdateGiveAwayParam): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateOfferByNameParam} arg
     *   - Arg object
     *
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name updateOfferByName
     * @summary: Update offer by name
     * @description: Update the specific offer details and its configuration by offer name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateOfferByName/).
     */
    updateOfferByName({ name, body, }?: RewardsPlatformApplicationValidator.UpdateOfferByNameParam): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateUserStatusParam} arg - Arg object
     * @returns {Promise<RewardsPlatformModel.AppUser>} - Success response
     * @name updateUserStatus
     * @summary: Update user status
     * @description: Update the user status by marking them as a block or unblock. It can be done by changing the active flag in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateUserStatus/).
     */
    updateUserStatus({ userId, body, }?: RewardsPlatformApplicationValidator.UpdateUserStatusParam): Promise<RewardsPlatformModel.AppUser>;
}
import RewardsPlatformApplicationValidator = require("./RewardsPlatformApplicationValidator");
import RewardsPlatformModel = require("./RewardsPlatformModel");
import Paginator = require("../../common/Paginator");
