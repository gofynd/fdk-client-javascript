export = Rewards;
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {RewardsPlatformApplicationValidator.GetGiveawayByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name getGiveawayById
     * @summary: Get giveaway by ID.
     * @description: Retrieve the specific giveaway by giveaway ID. It will show all the details of the requested giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getGiveawayById/).
     */
    getGiveawayById({ id, requestHeaders }?: RewardsPlatformApplicationValidator.GetGiveawayByIdParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetOfferByNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Fetch a offer by its name
     * @description: Fetch the specific offer details and configuration by the name of the offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getOfferByName/).
     */
    getOfferByName({ name, requestHeaders }?: RewardsPlatformApplicationValidator.GetOfferByNameParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetRewardsConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.ConfigurationRes>} - Success response
     * @name getRewardsConfiguration
     * @summary: Get all valid android paths
     * @description: Use this API to get a list of valid android paths required by the Rewards INIT API to validate a fraudulent device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getRewardsConfiguration/).
     */
    getRewardsConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsPlatformModel.ConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetUserDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.UserRes>} - Success response
     * @name getUserDetails
     * @summary: Get user reward details
     * @description: Fetches the user details and the user reward details with their current reward points for the specific user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserDetails/).
     */
    getUserDetails({ userId, requestHeaders }?: RewardsPlatformApplicationValidator.GetUserDetailsParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.UserRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetUserPointsHistoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.HistoryRes>} - Success response
     * @name getUserPointsHistory
     * @summary: Get all transactions of reward points
     * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ userId, pageId, pageSize, requestHeaders }?: RewardsPlatformApplicationValidator.GetUserPointsHistoryParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.HistoryRes>;
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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name saveGiveAway
     * @summary: List of giveaways of the current application.
     * @description: Creates a new giveaway in the current application, specifying the target audience, points allocation, as well as the name and display name of the giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/saveGiveAway/).
     */
    saveGiveAway({ body, requestHeaders }?: RewardsPlatformApplicationValidator.SaveGiveAwayParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.SetRewardsConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.SetConfigurationRes>} - Success response
     * @name setRewardsConfiguration
     * @summary: Updates the collection with given android paths.
     * @description: Updates the configuration or inserts new records with the given android paths. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/setRewardsConfiguration/).
     */
    setRewardsConfiguration({ body, requestHeaders }?: RewardsPlatformApplicationValidator.SetRewardsConfigurationParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.SetConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.ShowGiveawaysParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.GiveawayResponse>} - Success response
     * @name showGiveaways
     * @summary: List of giveaways of the current application.
     * @description: Fetch the detailed compilation of live, completed, and scheduled point-based giveaways created. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showGiveaways/).
     */
    showGiveaways({ pageId, pageSize, requestHeaders }?: RewardsPlatformApplicationValidator.ShowGiveawaysParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.GiveawayResponse>;
    /**
     * @param {RewardsPlatformApplicationValidator.ShowOffersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Offer[]>} - Success response
     * @name showOffers
     * @summary: List of offers of the current application.
     * @description: Retrieve the list of offers within the current application, including order_discount, order, sign_up, and referral, along with their respective details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showOffers/).
     */
    showOffers({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsPlatformModel.Offer[]>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateGiveAwayParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name updateGiveAway
     * @summary: Updates the giveaway by it's ID.
     * @description: Make the necessary updates to the giveaway based on its giveaway ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateGiveAway/).
     */
    updateGiveAway({ id, body, requestHeaders }?: RewardsPlatformApplicationValidator.UpdateGiveAwayParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateOfferByNameParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name updateOfferByName
     * @summary: Update offer by name
     * @description: Update the specific offer details and its configuration by offer name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateOfferByName/).
     */
    updateOfferByName({ name, body, requestHeaders }?: RewardsPlatformApplicationValidator.UpdateOfferByNameParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateUserStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.AppUser>} - Success response
     * @name updateUserStatus
     * @summary: Update user status
     * @description: Update the user status by marking them as a block or unblock. It can be done by changing the active flag in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateUserStatus/).
     */
    updateUserStatus({ userId, body, requestHeaders }?: RewardsPlatformApplicationValidator.UpdateUserStatusParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.AppUser>;
}
import RewardsPlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/Rewards/RewardsPlatformApplicationValidator");
import RewardsPlatformModel = require("sdk/output/javascript/code/sdk/platform/Rewards/RewardsPlatformModel");
import Paginator = require("sdk/output/javascript/code/sdk/common/Paginator");
