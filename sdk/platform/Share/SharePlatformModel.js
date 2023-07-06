const Joi = require("joi");

class ShareModel {
  static Attribution() {
    return Joi.object({
      campaign_cookie_expiry: Joi.string().allow(""),
    });
  }
  static CampaignShortLink() {
    return Joi.object({
      medium: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }
  static ClickStatsItem() {
    return Joi.object({
      display: Joi.string().allow(""),
      total: Joi.number(),
    });
  }
  static ClickStatsResponse() {
    return Joi.object({
      click_stats: Joi.array().items(ShareModel.ClickStatsItem()).required(),
    });
  }
  static ErrorRes() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
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
  static RedirectDevice() {
    return Joi.object({
      link: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static Redirects() {
    return Joi.object({
      android: ShareModel.RedirectDevice(),
      force_web: Joi.boolean(),
      ios: ShareModel.RedirectDevice(),
      web: ShareModel.WebRedirect(),
    });
  }
  static ShortLinkList() {
    return Joi.object({
      items: Joi.array().items(ShareModel.ShortLinkRes()),
      page: ShareModel.Page(),
    });
  }
  static ShortLinkReq() {
    return Joi.object({
      active: Joi.boolean(),
      attribution: ShareModel.Attribution(),
      campaign: ShareModel.CampaignShortLink(),
      count: Joi.number(),
      enable_tracking: Joi.boolean(),
      expire_at: Joi.string().allow(""),
      hash: Joi.string().allow(""),
      personalized: Joi.boolean(),
      redirects: ShareModel.Redirects(),
      social_media_tags: ShareModel.SocialMediaTags(),
      title: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
  static ShortLinkRes() {
    return Joi.object({
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      app_redirect: Joi.boolean(),
      application: Joi.string().allow(""),
      attribution: ShareModel.Attribution(),
      campaign: ShareModel.CampaignShortLink(),
      count: Joi.number(),
      created_at: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      enable_tracking: Joi.boolean(),
      expire_at: Joi.string().allow(""),
      fallback: Joi.string().allow(""),
      meta: Joi.any(),
      personalized: Joi.boolean(),
      redirects: ShareModel.Redirects(),
      social_media_tags: ShareModel.SocialMediaTags(),
      title: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      url: ShareModel.UrlInfo(),
      user_id: Joi.string().allow(""),
    });
  }
  static SocialMediaTags() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static UrlInfo() {
    return Joi.object({
      hash: Joi.string().allow(""),
      original: Joi.string().allow(""),
      short: Joi.string().allow(""),
    });
  }
  static WebRedirect() {
    return Joi.object({
      link: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
}
module.exports = ShareModel;
