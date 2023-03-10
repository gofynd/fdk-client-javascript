const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const RewardsValidator = require("./RewardsPlatformApplicationValidator");

class Rewards {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - Pagination page id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: List of giveaways of the current application.
   * @description: List of giveaways of the current application.
   */
  getGiveaways({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getGiveaways().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: List of giveaways of the current application.
   * @description: List of giveaways of the current application.
   */
  getGiveawaysPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getGiveaways({
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
   * @param {Object} arg - Arg object.
   * @param {Giveaway} arg.body
   * @summary: Adds a new giveaway.
   * @description: Adds a new giveaway.
   */
  createGiveaway({ body } = {}) {
    const { error } = RewardsValidator.createGiveaway().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Giveaway ID
   * @summary: Get giveaway by ID.
   * @description: Get giveaway by ID.
   */
  getGiveawayByID({ id } = {}) {
    const { error } = RewardsValidator.getGiveawayByID().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Giveaway ID
   * @param {Giveaway} arg.body
   * @summary: Updates the giveaway by it's ID.
   * @description: Updates the giveaway by it's ID.
   */
  updateGiveaway({ id, body } = {}) {
    const { error } = RewardsValidator.updateGiveaway().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: List of offer of the current application.
   * @description: List of offer of the current application.
   */
  getOffers({} = {}) {
    const { error } = RewardsValidator.getOffers().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.cookie - User's session cookie. This cookie is set in
   *   browser cookie when logged-in to fynd's authentication system i.e.
   *   `Grimlock` or by using grimlock-backend SDK for backend implementation.
   * @param {string} arg.name - Offer name
   * @summary: Get offer by name.
   * @description: Get offer by name.
   */
  getOfferByName({ cookie, name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      {
        cookie,
        name,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.name - Offer name
   * @param {Offer} arg.body
   * @summary: Updates the offer by name.
   * @description: Updates the offer by name.
   */
  updateOfferByName({ name, body } = {}) {
    const { error } = RewardsValidator.updateOfferByName().validate(
      {
        name,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User id
   * @summary: User's reward details.
   * @description: User's reward details.
   */
  getUserAvailablePoints({ userId } = {}) {
    const { error } = RewardsValidator.getUserAvailablePoints().validate(
      {
        userId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User id
   * @param {AppUser} arg.body
   * @summary: Update User status
   * @description: Update user status, active/archive
   */
  updateUserStatus({ userId, body } = {}) {
    const { error } = RewardsValidator.updateUserStatus().validate(
      {
        userId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User id
   * @param {string} [arg.pageId] - PageID is the ID of the requested page.
   *   For first request it should be kept empty.
   * @param {number} [arg.pageLimit] - PageLimit is the number of requested
   *   items in response.
   * @param {number} [arg.pageSize] - PageSize is the number of requested
   *   items in response.
   * @summary: Get list of points transactions.
   * @description: Get list of points transactions.
   * The list of points history is paginated.
   */
  getUserPointsHistory({ userId, pageId, pageLimit, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      {
        userId,
        pageId,
        pageLimit,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_limit"] = pageLimit;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/points/history/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {string} arg.userId - User id
   * @param {number} [arg.pageSize] - PageSize is the number of requested
   *   items in response.
   * @summary: Get list of points transactions.
   * @description: Get list of points transactions.
   * The list of points history is paginated.
   */
  getUserPointsHistoryPaginator({
    companyId,
    applicationId,
    userId,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getUserPointsHistory({
        companyId: companyId,
        applicationId: applicationId,
        userId: userId,
        pageId: pageId,
        pageLimit: pageLimit,
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
}
module.exports = Rewards;
