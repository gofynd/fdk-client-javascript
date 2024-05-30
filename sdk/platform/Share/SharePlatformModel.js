const Joi = require("joi");

/**
 * @typedef ClickStatsResponse
 * @property {ClickStatsItem[]} click_stats - An array of click statistics for
 *   the short link.
 */

/**
 * @typedef ClickStatsItem
 * @property {string} display - The display name of the click statistic.
 * @property {number} total - The total number of clicks for the statistic.
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef ShortLinkReq
 * @property {string} title - Give a name to the link.
 * @property {string} url - The web address to shorten.
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized] - To create personalized short links
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

class SharePlatformModel {
  /** @returns {ClickStatsResponse} */
  static ClickStatsResponse() {
    return Joi.object({
      click_stats: Joi.array()
        .items(SharePlatformModel.ClickStatsItem())
        .required(),
    });
  }

  /** @returns {ClickStatsItem} */
  static ClickStatsItem() {
    return Joi.object({
      display: Joi.string().allow("").required(),
      total: Joi.number().required(),
    });
  }

  /** @returns {RedirectDevice} */
  static RedirectDevice() {
    return Joi.object({
      link: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {WebRedirect} */
  static WebRedirect() {
    return Joi.object({
      link: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Redirects} */
  static Redirects() {
    return Joi.object({
      ios: SharePlatformModel.RedirectDevice(),
      android: SharePlatformModel.RedirectDevice(),
      web: SharePlatformModel.WebRedirect(),
      force_web: Joi.boolean(),
    });
  }

  /** @returns {CampaignShortLink} */
  static CampaignShortLink() {
    return Joi.object({
      source: Joi.string().allow(""),
      medium: Joi.string().allow(""),
    });
  }

  /** @returns {Attribution} */
  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string().allow(""),
    });
  }

  /** @returns {SocialMediaTags} */
  static SocialMediaTags() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
    });
  }

  /** @returns {ShortLinkReq} */
  static ShortLinkReq() {
    return Joi.object({
      title: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
      hash: Joi.string().allow(""),
      active: Joi.boolean(),
      expire_at: Joi.string().allow(""),
      enable_tracking: Joi.boolean(),
      personalized: Joi.boolean(),
      campaign: SharePlatformModel.CampaignShortLink(),
      redirects: SharePlatformModel.Redirects(),
      attribution: SharePlatformModel.Attribution(),
      social_media_tags: SharePlatformModel.SocialMediaTags(),
      count: Joi.number(),
    });
  }

  /** @returns {UrlInfo} */
  static UrlInfo() {
    return Joi.object({
      original: Joi.string().allow(""),
      short: Joi.string().allow(""),
      hash: Joi.string().allow(""),
    });
  }

  /** @returns {ShortLinkRes} */
  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string().allow(""),
      url: SharePlatformModel.UrlInfo(),
      created_by: Joi.string().allow(""),
      app_redirect: Joi.boolean(),
      fallback: Joi.string().allow(""),
      active: Joi.boolean(),
      _id: Joi.string().allow(""),
      enable_tracking: Joi.boolean(),
      expire_at: Joi.string().allow(""),
      application: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      meta: Joi.any(),
      updated_at: Joi.string().allow(""),
      personalized: Joi.boolean(),
      campaign: SharePlatformModel.CampaignShortLink(),
      redirects: SharePlatformModel.Redirects(),
      attribution: SharePlatformModel.Attribution(),
      social_media_tags: SharePlatformModel.SocialMediaTags(),
      count: Joi.number(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      current: Joi.number(),
      type: Joi.string().allow("").required(),
      size: Joi.number(),
    });
  }

  /** @returns {ShortLinkList} */
  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(SharePlatformModel.ShortLinkRes()),
      page: SharePlatformModel.Page(),
    });
  }

  /** @returns {ErrorRes} */
  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}
module.exports = SharePlatformModel;
