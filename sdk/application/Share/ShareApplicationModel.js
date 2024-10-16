const Joi = require("joi");

/**
 * @typedef QRCodeResp
 * @property {string} [link] - Original url that was used to encoded url into a QR code.
 * @property {string} [svg] - String representation of the QR Code in SVG format.
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link] - Fallback URL to redirect users to the app store
 *   or a web page if the app is not installed when they click the link.
 * @property {string} [type] - Type of fallback used to redirect users to the
 *   app store or a web page if the app is not installed when they click the link.
 */

/**
 * @typedef WebRedirect
 * @property {string} [link] - Fallback URL to redirect users to the app store
 *   or a web page if the app is not installed when they click the link.
 * @property {string} [type] - Type of fallback used to redirect users to the
 *   app store or a web page if the app is not installed when they click the link.
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web] - Flag for overriding redirection traffic to
 *   the web if the app is not installed when the link is clicked.
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [source] - Source of communication of campaign.
 * @property {string} [medium] - Channel of communication of campaign.
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry] - Expiration of campaign.
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [title] - Title to be displayed when link is shared on
 *   social media platforms.
 * @property {string} [description] - Description to be displayed when link is
 *   shared on social media platforms.
 * @property {string} [image] - Preview to be displayed when link is shared on
 *   social media platforms.
 */

/**
 * @typedef ShortLinkReq
 * @property {string} title - Give a name to the link.
 * @property {string} url - The web address to shorten.
 * @property {string} [hash] - A string value used for converting long URL to
 *   short URL and vice-versa.
 * @property {boolean} [active] - Status of the shortlink.
 * @property {string} [expire_at] - Expiry of the shortlink.
 * @property {boolean} [enable_tracking] - Flag to enable tracking of a short link.
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count] - Click count of shortlink.
 */

/**
 * @typedef UrlInfo
 * @property {string} [original] - Original web address which will be converted
 *   to shortlink.
 * @property {string} [hash] - A string value used for converting long URL to
 *   short URL and vice-versa.
 * @property {string} [short_url] - Condensed version of a longer URL,
 *   redirecting to the original page upon being clicked.
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [title] - Name reference of the shortlink.
 * @property {UrlInfo} [url]
 * @property {string} [created_by] - Reference of the creator of the shortlink.
 * @property {boolean} [app_redirect] - Application redirection flag of shortlink.
 * @property {string} [fallback] - Fallback attributes of shortlink.
 * @property {boolean} [active] - Status of the shortlink.
 * @property {string} [_id] - Key used to uniquely identify document that
 *   contains shortlink details.
 * @property {boolean} [enable_tracking] - Flag to enable tracking of a short link.
 * @property {string} [expire_at] - Expiry of the shortlink.
 * @property {string} [application] - The ID of the sales channel associated
 *   with the shortlink.
 * @property {string} [user_id] - Identifier which can uniquely identify the user.
 * @property {string} [created_at] - The timestamp indicating when a record was
 *   initially created.
 * @property {Object} [meta] - Additional attributes of shortlink.
 * @property {string} [updated_at] - The timestamp indicating when a record was
 *   last modified or updated.
 * @property {boolean} [personalized] - To create personalized short links.
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count] - Click count of shortlink.
 */

/**
 * @typedef ErrorRes
 * @property {string} [message] - Error message providing details about the error.
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
      meta: Joi.object().pattern(/\S/, Joi.any()),
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
