const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const RewardsPlatformApplicationValidator = require("./RewardsPlatformApplicationValidator");
const RewardsPlatformModel = require("./RewardsPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Rewards {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetGiveawayByIdParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
   * @name getGiveawayById
   * @summary: Get giveaway by ID.
   * @description: Retrieve the specific giveaway by giveaway ID. It will show all the details of the requested giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getGiveawayById/).
   */
  async getGiveawayById({ id } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.getGiveawayById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.getGiveawayById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > getGiveawayById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.Giveaway().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > getGiveawayById \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetOfferByNameParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
   * @name getOfferByName
   * @summary: Fetch a offer by its name
   * @description: Fetch the specific offer details and configuration by the name of the offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getOfferByName/).
   */
  async getOfferByName({ name } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > getOfferByName \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      query_params,
      undefined
    );

    const { error: res_error } = RewardsPlatformModel.Offer().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > getOfferByName \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetRewardsConfigurationParam} arg
   *   - Arg object
   *
   * @returns {Promise<RewardsPlatformModel.ConfigurationRes>} - Success response
   * @name getRewardsConfiguration
   * @summary: Get all valid android paths
   * @description: Use this API to get a list of valid android paths required by the Rewards INIT API to validate a fraudulent device. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getRewardsConfiguration/).
   */
  async getRewardsConfiguration({} = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.getRewardsConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.getRewardsConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > getRewardsConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.ConfigurationRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > getRewardsConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetUserDetailsParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.UserRes>} - Success response
   * @name getUserDetails
   * @summary: Get user reward details
   * @description: Fetches the user details and the user reward details with their current reward points for the specific user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserDetails/).
   */
  async getUserDetails({ userId } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.getUserDetails().validate(
      { userId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.getUserDetails().validate(
      { userId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > getUserDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.UserRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > getUserDetails \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetUserPointsHistoryParam} arg
   *   - Arg object
   *
   * @returns {Promise<RewardsPlatformModel.HistoryRes>} - Success response
   * @name getUserPointsHistory
   * @summary: Get all transactions of reward points
   * @description: Fetches a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserPointsHistory/).
   */
  async getUserPointsHistory({
    userId,

    pageId,
    pageSize,
  } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.getUserPointsHistory().validate(
      {
        userId,

        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.getUserPointsHistory().validate(
      {
        userId,

        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > getUserPointsHistory \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/points/history/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.HistoryRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > getUserPointsHistory \n ${res_error}`,
      });
    }

    return response;
  }

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
  getUserPointsHistoryPaginator({
    userId,
    companyId,
    applicationId,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getUserPointsHistory({
        userId: userId,
        companyId: companyId,
        applicationId: applicationId,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.SaveGiveAwayParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
   * @name saveGiveAway
   * @summary: List of giveaways of the current application.
   * @description: Creates a new giveaway in the current application, specifying the target audience, points allocation, as well as the name and display name of the giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/saveGiveAway/).
   */
  async saveGiveAway({ body } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.saveGiveAway().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.saveGiveAway().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > saveGiveAway \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.Giveaway().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > saveGiveAway \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.SetRewardsConfigurationParam} arg
   *   - Arg object
   *
   * @returns {Promise<RewardsPlatformModel.SetConfigurationRes>} - Success response
   * @name setRewardsConfiguration
   * @summary: Updates the collection with given android paths.
   * @description: Updates the configuration or inserts new records with the given android paths. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/setRewardsConfiguration/).
   */
  async setRewardsConfiguration({ body } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.setRewardsConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.setRewardsConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > setRewardsConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.SetConfigurationRes().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > setRewardsConfiguration \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.ShowGiveawaysParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.GiveawayResponse>} - Success response
   * @name showGiveaways
   * @summary: List of giveaways of the current application.
   * @description: Fetch the detailed compilation of live, completed, and scheduled point-based giveaways created. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showGiveaways/).
   */
  async showGiveaways({ pageId, pageSize } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.showGiveaways().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.showGiveaways().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > showGiveaways \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.GiveawayResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > showGiveaways \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.ShowOffersParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.Offer[]>} - Success response
   * @name showOffers
   * @summary: List of offers of the current application.
   * @description: Retrieve the list of offers within the current application, including order_discount, order, sign_up, and referral, along with their respective details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showOffers/).
   */
  async showOffers({} = {}) {
    const { error } = RewardsPlatformApplicationValidator.showOffers().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.showOffers().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > showOffers \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/`,
      query_params,
      undefined
    );

    const { error: res_error } = Joi.array()
      .items(RewardsPlatformModel.Offer())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > showOffers \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.UpdateGiveAwayParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
   * @name updateGiveAway
   * @summary: Updates the giveaway by it's ID.
   * @description: Make the necessary updates to the giveaway based on its giveaway ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateGiveAway/).
   */
  async updateGiveAway({ id, body } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.updateGiveAway().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.updateGiveAway().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > updateGiveAway \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.Giveaway().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > updateGiveAway \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.UpdateOfferByNameParam} arg
   *   - Arg object
   *
   * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
   * @name updateOfferByName
   * @summary: Update offer by name
   * @description: Update the specific offer details and its configuration by offer name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateOfferByName/).
   */
  async updateOfferByName({
    name,

    body,
  } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.updateOfferByName().validate(
      {
        name,

        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.updateOfferByName().validate(
      {
        name,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > updateOfferByName \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      query_params,
      body
    );

    const { error: res_error } = RewardsPlatformModel.Offer().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > updateOfferByName \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.UpdateUserStatusParam} arg - Arg object
   * @returns {Promise<RewardsPlatformModel.AppUser>} - Success response
   * @name updateUserStatus
   * @summary: Update user status
   * @description: Update the user status by marking them as a block or unblock. It can be done by changing the active flag in request body. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateUserStatus/).
   */
  async updateUserStatus({
    userId,

    body,
  } = {}) {
    const {
      error,
    } = RewardsPlatformApplicationValidator.updateUserStatus().validate(
      {
        userId,

        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsPlatformApplicationValidator.updateUserStatus().validate(
      {
        userId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Rewards > updateUserStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = RewardsPlatformModel.AppUser().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Rewards > updateUserStatus \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Rewards;
