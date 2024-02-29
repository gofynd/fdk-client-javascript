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
     * @description: Retrieve specific giveaway details by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getGiveawayById/).
     */
    getGiveawayById({ id, requestHeaders }?: RewardsPlatformApplicationValidator.GetGiveawayByIdParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Giveaway>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetOfferByNameParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
     * @name getOfferByName
     * @summary: Get offer by name.
     * @description: Retrieve an offer by its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getOfferByName/).
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
     * @summary: Get rewards configuration.
     * @description: Retrieve the configuration settings for the rewards program. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getRewardsConfiguration/).
     */
    getRewardsConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsPlatformModel.ConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.GetUserDetailsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.UserRes>} - Success response
     * @name getUserDetails
     * @summary: Get user details.
     * @description: Retrieve comprehensive details about a user in the rewards program. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserDetails/).
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
     * @summary: Get user points history.
     * @description: Retrieve the history of points earned and redeemed by a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserPointsHistory/).
     */
    getUserPointsHistory({ userId, pageId, pageSize, requestHeaders }?: RewardsPlatformApplicationValidator.GetUserPointsHistoryParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.HistoryRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.SaveGiveAwayParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name saveGiveAway
     * @summary: Save giveaway.
     * @description: Store and manage details of a giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/saveGiveAway/).
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
     * @summary: Set rewards configuration.
     * @description: Configure and modify the settings for the rewards program. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/setRewardsConfiguration/).
     */
    setRewardsConfiguration({ body, requestHeaders }?: RewardsPlatformApplicationValidator.SetRewardsConfigurationParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.SetConfigurationRes>;
    /**
     * @param {RewardsPlatformApplicationValidator.ShowGiveawaysParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.GiveawayResponse>} - Success response
     * @name showGiveaways
     * @summary: Display giveaways.
     * @description: Retrieve and display available giveaways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showGiveaways/).
     */
    showGiveaways({ pageId, pageSize, requestHeaders }?: RewardsPlatformApplicationValidator.ShowGiveawaysParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.GiveawayResponse>;
    /**
     * @param {RewardsPlatformApplicationValidator.ShowOffersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Offer[]>} - Success response
     * @name showOffers
     * @summary: Show offers.
     * @description: Display available offers for users. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showOffers/).
     */
    showOffers({ requestHeaders }?: any, { responseHeaders }?: object): Promise<RewardsPlatformModel.Offer[]>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateGiveAwayParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
     * @name updateGiveAway
     * @summary: Update giveaway.
     * @description: Modify and update information about a giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateGiveAway/).
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
     * @summary: Update offer by name.
     * @description: Modify and manage an offer using its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateOfferByName/).
     */
    updateOfferByName({ name, body, requestHeaders }?: RewardsPlatformApplicationValidator.UpdateOfferByNameParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.Offer>;
    /**
     * @param {RewardsPlatformApplicationValidator.UpdateUserStatusParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<RewardsPlatformModel.AppUser>} - Success response
     * @name updateUserStatus
     * @summary: Update user status.
     * @description: Change and update the status of a user in the rewards system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateUserStatus/).
     */
    updateUserStatus({ userId, body, requestHeaders }?: RewardsPlatformApplicationValidator.UpdateUserStatusParam, { responseHeaders }?: object): Promise<RewardsPlatformModel.AppUser>;
}
import RewardsPlatformApplicationValidator = require("./RewardsPlatformApplicationValidator");
import RewardsPlatformModel = require("./RewardsPlatformModel");
