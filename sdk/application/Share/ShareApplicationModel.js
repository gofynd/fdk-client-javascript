const Joi = require("joi");

/**
 * @typedef QRCodeResp
 * @property {string} [link]
 * @property {string} [svg]
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
 * @property {string} [hash]
 * @property {string} [short_url]
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
 * @typedef ErrorRes
 * @property {string} [message]
 */

class ShareApplicationModel {
  /** @returns {QRCodeResp} */
  static QRCodeResp() {
    return Joi.object({
      link: Joi.string().allow(""),
      svg: Joi.string().allow(""),
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
      ios: ShareApplicationModel.RedirectDevice(),
      android: ShareApplicationModel.RedirectDevice(),
      web: ShareApplicationModel.WebRedirect(),
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
      campaign: ShareApplicationModel.CampaignShortLink(),
      redirects: ShareApplicationModel.Redirects(),
      attribution: ShareApplicationModel.Attribution(),
      social_media_tags: ShareApplicationModel.SocialMediaTags(),
      count: Joi.number(),
    });
  }

  /** @returns {UrlInfo} */
  static UrlInfo() {
    return Joi.object({
      original: Joi.string().allow(""),
      hash: Joi.string().allow(""),
      short_url: Joi.string().allow(""),
    });
  }

  /** @returns {ShortLinkRes} */
  static ShortLinkRes() {
    return Joi.object({
      title: Joi.string().allow(""),
      url: ShareApplicationModel.UrlInfo(),
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
      campaign: ShareApplicationModel.CampaignShortLink(),
      redirects: ShareApplicationModel.Redirects(),
      attribution: ShareApplicationModel.Attribution(),
      social_media_tags: ShareApplicationModel.SocialMediaTags(),
      count: Joi.number(),
    });
  }

  /** @returns {ErrorRes} */
  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
}
module.exports = ShareApplicationModel;
