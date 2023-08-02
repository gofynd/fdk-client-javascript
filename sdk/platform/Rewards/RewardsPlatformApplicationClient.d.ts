export = Rewards;
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @returns {Promise<Giveaway>} - Success response
     * @summary: Get giveaway by ID.
     * @description: Retrieve the specific giveaway by giveaway ID. It will show all the details of the requested giveaway.
     */
    getGiveawayById({ id }?: {
        id: string;
    }): Promise<Giveaway>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @returns {Promise<Offer>} - Success response
     * @summary: Fetch a offer by its name
     * @description: Fetch the specific offer details and configuration by the name of the offer.
     */
    getOfferByName({ name }?: {
        name: string;
    }): Promise<Offer>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ConfigurationRes>} - Success response
     * @summary: Get all valid android paths
     * @description: Use this API to get a list of valid android paths required by the Rewards INIT API to validate a fraudulent device.
     */
    getRewardsConfiguration({}?: any): Promise<ConfigurationRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @returns {Promise<UserRes>} - Success response
     * @summary: Get user reward details
     * @description: Fetches the user details and the user reward details with their current reward points for the specific user.
     */
    getUserDetails({ userId }?: {
        userId: string;
    }): Promise<UserRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<HistoryRes>} - Success response
     * @summary: Get all transactions of reward points
     * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
     */
    getUserPointsHistory({ userId, pageId, pageSize, }?: {
        userId: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<HistoryRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {string} arg.companyId - Company id
     * @param {string} arg.applicationId - Application id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
     */
    getUserPointsHistoryPaginator({ userId, companyId, applicationId, pageSize, }?: {
        userId: string;
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {Giveaway} arg.body
     * @returns {Promise<Giveaway>} - Success response
     * @summary: List of giveaways of the current application.
     * @description: Creates a new giveaway in the current application, specifying the target audience, points allocation, as well as the name and display name of the giveaway.
     */
    saveGiveAway({ body }?: {
        body: Giveaway;
    }): Promise<Giveaway>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ConfigurationRequest} arg.body
     * @returns {Promise<SetConfigurationRes>} - Success response
     * @summary: Updates the collection with given android paths.
     * @description: Updates the configuration or inserts new records with the given android paths.
     */
    setRewardsConfiguration({ body }?: {
        body: ConfigurationRequest;
    }): Promise<SetConfigurationRes>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pageId - Pagination page id
     * @param {number} arg.pageSize - Pagination page size
     * @returns {Promise<GiveawayResponse>} - Success response
     * @summary: List of giveaways of the current application.
     * @description: Fetch the detailed compilation of live, completed, and scheduled point-based giveaways created.
     */
    showGiveaways({ pageId, pageSize }?: {
        pageId: string;
        pageSize: number;
    }): Promise<GiveawayResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<Offer[]>} - Success response
     * @summary: List of offers of the current application.
     * @description: Retrieve the list of offers within the current application, including order_discount, order, sign_up, and referral, along with their respective details.
     */
    showOffers({}?: any): Promise<Offer[]>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     * @returns {Promise<Giveaway>} - Success response
     * @summary: Updates the giveaway by it's ID.
     * @description: Make the necessary updates to the giveaway based on its giveaway ID.
     */
    updateGiveAway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): Promise<Giveaway>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @param {Offer} arg.body
     * @returns {Promise<Offer>} - Success response
     * @summary: Update offer by name
     * @description: Update the specific offer details and its configuration by offer name.
     */
    updateOfferByName({ name, body, }?: {
        name: string;
        body: Offer;
    }): Promise<Offer>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.userId - User id
     * @param {AppUser} arg.body
     * @returns {Promise<AppUser>} - Success response
     * @summary: Update user status
     * @description: Update the user status by marking them as a block or unblock. It can be done by changing the active flag in request body.
     */
    updateUserStatus({ userId, body, }?: {
        userId: string;
        body: AppUser;
    }): Promise<AppUser>;
}
import Paginator = require("../../common/Paginator");
