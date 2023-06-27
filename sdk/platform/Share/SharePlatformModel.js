const Joi = require("joi");

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [medium]
 * @property {string} [source]
 */

/**
 * @typedef ClickStatsItem
 * @property {string} [display] - The display name of the click statistic.
 * @property {number} [total] - The total number of clicks for the statistic.
 */

/**
 * @typedef ClickStatsResponse
 * @property {ClickStatsItem[]} click_stats - An array of click statistics for
 *   the short link.
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [android]
 * @property {boolean} [force_web]
 * @property {RedirectDevice} [ios]
 * @property {WebRedirect} [web]
 */

/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ShortLinkReq
 * @property {boolean} [active]
 * @property {Attribution} [attribution]
 * @property {CampaignShortLink} [campaign]
 * @property {number} [count]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [hash]
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {Redirects} [redirects]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {string} title - Give a name to the link.
 * @property {string} url - The web address to shorten.
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {boolean} [app_redirect]
 * @property {string} [application]
 * @property {Attribution} [attribution]
 * @property {CampaignShortLink} [campaign]
 * @property {number} [count]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [fallback]
 * @property {Object} [meta]
 * @property {boolean} [personalized] - To create personalized short links
 * @property {Redirects} [redirects]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {string} [title]
 * @property {string} [updated_at]
 * @property {UrlInfo} [url]
 * @property {string} [user_id]
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} [title]
 */

/**
 * @typedef UrlInfo
 * @property {string} [hash]
 * @property {string} [original]
 * @property {string} [short]
 */

/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

class SharePlatformModel {
  /** @returns {Attribution} */
  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string().allow(""),
    });
  }

  /** @returns {CampaignShortLink} */
  static CampaignShortLink() {
    return Joi.object({
      medium: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {ClickStatsItem} */
  static ClickStatsItem() {
    return Joi.object({
      display: Joi.string().allow(""),
      total: Joi.number(),
    });
  }

  /** @returns {ClickStatsResponse} */
  static ClickStatsResponse() {
    return Joi.object({
      click_stats: Joi.array()
        .items(SharePlatformModel.ClickStatsItem())
        .required(),
    });
  }

  /** @returns {ErrorRes} */
  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {RedirectDevice} */
  static RedirectDevice() {
    return Joi.object({
      link: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {Redirects} */
  static Redirects() {
    return Joi.object({
      android: SharePlatformModel.RedirectDevice(),
      force_web: Joi.boolean(),
      ios: SharePlatformModel.RedirectDevice(),
      web: SharePlatformModel.WebRedirect(),
    });
  }

  /** @returns {ShortLinkList} */
  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(SharePlatformModel.ShortLinkRes()),
      page: SharePlatformModel.Page(),
    });
  }

  /** @returns {ShortLinkReq} */
  static ShortLinkReq() {
    return Joi.object({
      active: Joi.boolean(),
      attribution: SharePlatformModel.Attribution(),
      campaign: SharePlatformModel.CampaignShortLink(),
      count: Joi.number(),
      enable_tracking: Joi.boolean(),
      expire_at: Joi.string().allow(""),
      hash: Joi.string().allow(""),
      personalized: Joi.boolean(),
      redirects: SharePlatformModel.Redirects(),
      social_media_tags: SharePlatformModel.SocialMediaTags(),
      title: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShortLinkRes} */
  static ShortLinkRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      app_redirect: Joi.boolean(),
      application: Joi.string().allow(""),
      attribution: SharePlatformModel.Attribution(),
      campaign: SharePlatformModel.CampaignShortLink(),
      count: Joi.number(),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      enable_tracking: Joi.boolean(),
      expire_at: Joi.string().allow(""),
      fallback: Joi.string().allow(""),
      meta: Joi.any(),
      personalized: Joi.boolean(),
      redirects: SharePlatformModel.Redirects(),
      social_media_tags: SharePlatformModel.SocialMediaTags(),
      title: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      url: SharePlatformModel.UrlInfo(),
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {SocialMediaTags} */
  static SocialMediaTags() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {UrlInfo} */
  static UrlInfo() {
    return Joi.object({
      hash: Joi.string().allow(""),
      original: Joi.string().allow(""),
      short: Joi.string().allow(""),
    });
  }

  /** @returns {WebRedirect} */
  static WebRedirect() {
    return Joi.object({
      link: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
}
module.exports = SharePlatformModel;
