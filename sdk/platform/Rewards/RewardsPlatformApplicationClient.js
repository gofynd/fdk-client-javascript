const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
   * @name getGiveawayById
   * @summary: Get a giveaway
   * @description: Retrieve specific giveaway details by its unique identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getGiveawayById/).
   */
  async getGiveawayById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.Giveaway().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > getGiveawayById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetOfferByNameParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
   * @name getOfferByName
   * @summary: Get offer by name
   * @description: Retrieve an offer by its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getOfferByName/).
   */
  async getOfferByName(
    { name, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.Offer().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > getOfferByName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetRewardsConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.ConfigurationRes>} - Success response
   * @name getRewardsConfiguration
   * @summary: Get rewards configuration
   * @description: Retrieve the configuration settings for the rewards program. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getRewardsConfiguration/).
   */
  async getRewardsConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.ConfigurationRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > getRewardsConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetUserDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.UserRes>} - Success response
   * @name getUserDetails
   * @summary: Get a user
   * @description: Retrieve comprehensive details about a user in the rewards program. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserDetails/).
   */
  async getUserDetails(
    { userId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.UserRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > getUserDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.GetUserPointsHistoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.HistoryRes>} - Success response
   * @name getUserPointsHistory
   * @summary: Get reward user points history
   * @description: Retrieve the history of points earned and redeemed by a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/getUserPointsHistory/).
   */
  async getUserPointsHistory(
    { userId, pageId, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.HistoryRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > getUserPointsHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.SaveGiveAwayParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
   * @name saveGiveAway
   * @summary: Create a giveaway
   * @description: Store and manage details of a giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/saveGiveAway/).
   */
  async saveGiveAway(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.Giveaway().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > saveGiveAway \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.SetRewardsConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.SetConfigurationRes>} - Success response
   * @name setRewardsConfiguration
   * @summary: Set rewards configuration
   * @description: Configure and modify the settings for the rewards program. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/setRewardsConfiguration/).
   */
  async setRewardsConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.SetConfigurationRes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > setRewardsConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.ShowGiveawaysParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.ListGiveaway>} - Success response
   * @name showGiveaways
   * @summary: List giveaways
   * @description: Retrieve and display available giveaways. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showGiveaways/).
   */
  async showGiveaways(
    { pageId, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.ListGiveaway().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > showGiveaways \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.ShowOffersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.Offer[]>} - Success response
   * @name showOffers
   * @summary: List offers
   * @description: Display available offers for users. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/showOffers/).
   */
  async showOffers(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(RewardsPlatformModel.Offer())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > showOffers \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.UpdateGiveAwayParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.Giveaway>} - Success response
   * @name updateGiveAway
   * @summary: Update a giveaway
   * @description: Modify and update information about a giveaway. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateGiveAway/).
   */
  async updateGiveAway(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.Giveaway().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > updateGiveAway \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.UpdateOfferByNameParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.Offer>} - Success response
   * @name updateOfferByName
   * @summary: Update offer by name
   * @description: Modify and manage an offer using its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateOfferByName/).
   */
  async updateOfferByName(
    { name, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.Offer().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > updateOfferByName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsPlatformApplicationValidator.UpdateUserStatusParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<RewardsPlatformModel.AppUser>} - Success response
   * @name updateUserStatus
   * @summary: Update user status
   * @description: Change and update the status of a user in the rewards system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/rewards/updateUserStatus/).
   */
  async updateUserStatus(
    { userId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = RewardsPlatformModel.AppUser().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Rewards > updateUserStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Rewards;
