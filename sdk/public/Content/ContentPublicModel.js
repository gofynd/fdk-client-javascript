const Joi = require("joi");

/**
 * @typedef BasicDetailsPayloadSchema
 * @property {string} [name]
 * @property {string} [logo_url]
 * @property {string} [favicon_url]
 * @property {string} [title]
 * @property {string} [meta_title]
 * @property {string} [meta_description]
 * @property {string} [meta_image]
 * @property {WhatsNew[]} [whats_new]
 * @property {Features[]} [features]
 * @property {Object} [authentication]
 * @property {BusinessAccount} [business_account]
 * @property {SellerSupport} [seller_support]
 * @property {string} [copyright]
 * @property {string} [address]
 * @property {string} [documentation_url]
 * @property {string} [faq_url]
 * @property {string} [facebook_url]
 * @property {string} [instagram_url]
 * @property {string} [privacy_url]
 * @property {string} [twitter_url]
 * @property {string} [termsofservice_url]
 */

/**
 * @typedef WhatsNew
 * @property {string} [description]
 */

/**
 * @typedef Features
 * @property {string} [title]
 * @property {string} [text]
 * @property {string[]} [list]
 * @property {string} [image]
 */

/**
 * @typedef BusinessAccount
 * @property {boolean} [is_limit]
 * @property {number} [threshold]
 */

/**
 * @typedef SellerSupport
 * @property {string} [email]
 * @property {number} [phone_number]
 */

/**
 * @typedef MenuSchema
 * @property {SalesChannelSchema} [sales_channel]
 * @property {OtherSellerSchema} [other_seller]
 * @property {FooterContentSchema} [footer_content]
 * @property {boolean} [can_create_business_account]
 * @property {CompanyLevelMenuItemSchema[]} [company_level]
 * @property {ApplicationLevelMenuItemSchema[]} [application_level]
 */

/**
 * @typedef MenusSchema
 * @property {string} [_id]
 * @property {MenuTypeSchema} [desktop]
 * @property {MenuTypeSchema} [mobile]
 * @property {number} [__v]
 */

/**
 * @typedef MenuTypeSchema
 * @property {MenuSchema} [menu]
 */

/**
 * @typedef CompanyLevelMenuItemSchema
 * @property {VisibleOnSchema} [visible_on]
 * @property {string} [display]
 * @property {string[]} [permissions]
 * @property {string} [title]
 * @property {string} [link]
 * @property {string} [icon]
 * @property {boolean} [is_disabled]
 * @property {CompanyLevelMenuItemSchema[]} [child]
 */

/**
 * @typedef ApplicationLevelMenuItemSchema
 * @property {VisibleOnSchema} [visible_on]
 * @property {string} [display]
 * @property {string[]} [permissions]
 * @property {string} [title]
 * @property {string} [link]
 * @property {string} [icon]
 * @property {boolean} [is_disabled]
 * @property {ApplicationLevelMenuItemSchema[]} [child]
 */

/**
 * @typedef VisibleOnSchema
 * @property {boolean} [web]
 * @property {boolean} [ios]
 * @property {boolean} [android]
 */

/**
 * @typedef SalesChannelSchema
 * @property {boolean} [can_add]
 * @property {string} [title]
 */

/**
 * @typedef OtherSellerSchema
 * @property {boolean} [is_visible]
 * @property {string} [title]
 */

/**
 * @typedef FooterContentSchema
 * @property {boolean} [is_visible]
 * @property {string} [line_one]
 * @property {string} [line_two]
 */

/**
 * @typedef AnalyticsTagsSchema
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {string} [body_code]
 * @property {boolean} [enabled]
 * @property {string} [header_code]
 * @property {string} [name]
 */

/**
 * @typedef CustomPageBySlugSchema
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {ItemSchema[]} [content]
 * @property {CreateCustomPageSeoSchema} [seo]
 * @property {CreatedBySchema} [created_by]
 * @property {CreatedBySchema} [modified_by]
 * @property {boolean} [archived]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */

/**
 * @typedef ItemSchema
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef CreateCustomPageSeoSchema
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef RawHtmlContentSchema
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef FooterSchema
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {RawHtmlContentSchema[]} [content]
 * @property {Object[]} [footer_meta]
 * @property {CreatedBySchema} [created_by]
 * @property {CreatedBySchema} [modified_by]
 * @property {boolean} [archived]
 * @property {number} [__v]
 */

/**
 * @typedef HomePageContentSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {CreatedBySchema} [created_by]
 * @property {boolean} [archived]
 * @property {string} [page_type]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */

/**
 * @typedef NavItemSchema
 * @property {string} [title]
 * @property {string} [link]
 * @property {string} [href]
 */

/**
 * @typedef NavbarSchema
 * @property {string} [_id]
 * @property {NavItemSchema[]} [items]
 * @property {number} [__v]
 * @property {CreatedBySchema} [modified_by]
 */

/**
 * @typedef MediaSchema
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [alt]
 * @property {string} [anchor_link]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [user_id]
 */

/**
 * @typedef PricingBannerSchema
 * @property {string} [_id]
 * @property {MediaSchema} [web_banner]
 * @property {MediaSchema} [mobile_banner]
 * @property {boolean} [published]
 * @property {CreatedBySchema} [created_by]
 * @property {CreatedBySchema} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */

/**
 * @typedef SdkReadmeSchema
 * @property {string} [data]
 */

/**
 * @typedef TagsSchema
 * @property {CustomItemSchema[]} [items]
 * @property {PageSchema} [page]
 */

/**
 * @typedef CustomItemSchema
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [position]
 * @property {boolean} [archived]
 * @property {UserSchema} [created_by]
 * @property {string} [url]
 * @property {string} [content]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [__v]
 */

/**
 * @typedef PageSchema
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef UserSchema
 * @property {string} [user_id]
 */

/**
 * @typedef CredentialSchema
 * @property {string} [_id]
 * @property {ConfigurationSchema} [configuration]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {boolean} [is_enable]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {number} [__v]
 */

/**
 * @typedef ConfigurationSchema
 * @property {string} [token]
 * @property {string} [host]
 */

/**
 * @typedef CredentialsSchema
 * @property {CredentialSchema[]} [items]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

class ContentPublicModel {
  /** @returns {BasicDetailsPayloadSchema} */
  static BasicDetailsPayloadSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      logo_url: Joi.string().allow(""),
      favicon_url: Joi.string().allow(""),
      title: Joi.string().allow(""),
      meta_title: Joi.string().allow(""),
      meta_description: Joi.string().allow(""),
      meta_image: Joi.string().allow(""),
      whats_new: Joi.array().items(ContentPublicModel.WhatsNew()),
      features: Joi.array().items(ContentPublicModel.Features()),
      authentication: Joi.object().pattern(/\S/, Joi.any()),
      business_account: ContentPublicModel.BusinessAccount(),
      seller_support: ContentPublicModel.SellerSupport(),
      copyright: Joi.string().allow(""),
      address: Joi.string().allow(""),
      documentation_url: Joi.string().allow(""),
      faq_url: Joi.string().allow(""),
      facebook_url: Joi.string().allow(""),
      instagram_url: Joi.string().allow(""),
      privacy_url: Joi.string().allow(""),
      twitter_url: Joi.string().allow(""),
      termsofservice_url: Joi.string().allow(""),
    });
  }

  /** @returns {WhatsNew} */
  static WhatsNew() {
    return Joi.object({
      description: Joi.string().allow(""),
    });
  }

  /** @returns {Features} */
  static Features() {
    return Joi.object({
      title: Joi.string().allow(""),
      text: Joi.string().allow(""),
      list: Joi.array().items(Joi.string().allow("")),
      image: Joi.string().allow(""),
    });
  }

  /** @returns {BusinessAccount} */
  static BusinessAccount() {
    return Joi.object({
      is_limit: Joi.boolean(),
      threshold: Joi.number(),
    });
  }

  /** @returns {SellerSupport} */
  static SellerSupport() {
    return Joi.object({
      email: Joi.string().allow(""),
      phone_number: Joi.number(),
    });
  }

  /** @returns {MenuSchema} */
  static MenuSchema() {
    return Joi.object({
      sales_channel: ContentPublicModel.SalesChannelSchema(),
      other_seller: ContentPublicModel.OtherSellerSchema(),
      footer_content: ContentPublicModel.FooterContentSchema(),
      can_create_business_account: Joi.boolean(),
      company_level: Joi.array().items(
        ContentPublicModel.CompanyLevelMenuItemSchema()
      ),
      application_level: Joi.array().items(
        ContentPublicModel.ApplicationLevelMenuItemSchema()
      ),
    });
  }

  /** @returns {MenusSchema} */
  static MenusSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      desktop: ContentPublicModel.MenuTypeSchema(),
      mobile: ContentPublicModel.MenuTypeSchema(),
      __v: Joi.number(),
    });
  }

  /** @returns {MenuTypeSchema} */
  static MenuTypeSchema() {
    return Joi.object({
      menu: ContentPublicModel.MenuSchema(),
    });
  }

  /** @returns {CompanyLevelMenuItemSchema} */
  static CompanyLevelMenuItemSchema() {
    return Joi.object({
      visible_on: ContentPublicModel.VisibleOnSchema(),
      display: Joi.string().allow(""),
      permissions: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      link: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      is_disabled: Joi.boolean(),
      child: Joi.array().items(Joi.link("#CompanyLevelMenuItemSchema")),
    }).id("CompanyLevelMenuItemSchema");
  }

  /** @returns {ApplicationLevelMenuItemSchema} */
  static ApplicationLevelMenuItemSchema() {
    return Joi.object({
      visible_on: ContentPublicModel.VisibleOnSchema(),
      display: Joi.string().allow(""),
      permissions: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      link: Joi.string().allow(""),
      icon: Joi.string().allow(""),
      is_disabled: Joi.boolean(),
      child: Joi.array().items(Joi.link("#ApplicationLevelMenuItemSchema")),
    }).id("ApplicationLevelMenuItemSchema");
  }

  /** @returns {VisibleOnSchema} */
  static VisibleOnSchema() {
    return Joi.object({
      web: Joi.boolean(),
      ios: Joi.boolean(),
      android: Joi.boolean(),
    });
  }

  /** @returns {SalesChannelSchema} */
  static SalesChannelSchema() {
    return Joi.object({
      can_add: Joi.boolean(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {OtherSellerSchema} */
  static OtherSellerSchema() {
    return Joi.object({
      is_visible: Joi.boolean(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {FooterContentSchema} */
  static FooterContentSchema() {
    return Joi.object({
      is_visible: Joi.boolean(),
      line_one: Joi.string().allow(""),
      line_two: Joi.string().allow(""),
    });
  }

  /** @returns {AnalyticsTagsSchema} */
  static AnalyticsTagsSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      __v: Joi.number(),
      body_code: Joi.string().allow(""),
      enabled: Joi.boolean(),
      header_code: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CustomPageBySlugSchema} */
  static CustomPageBySlugSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      published: Joi.boolean(),
      content: Joi.array().items(ContentPublicModel.ItemSchema()),
      seo: ContentPublicModel.CreateCustomPageSeoSchema(),
      created_by: ContentPublicModel.CreatedBySchema(),
      modified_by: ContentPublicModel.CreatedBySchema(),
      archived: Joi.boolean(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {ItemSchema} */
  static ItemSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CreateCustomPageSeoSchema} */
  static CreateCustomPageSeoSchema() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
    });
  }

  /** @returns {RawHtmlContentSchema} */
  static RawHtmlContentSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {FooterSchema} */
  static FooterSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      published: Joi.boolean(),
      content: Joi.array().items(ContentPublicModel.RawHtmlContentSchema()),
      footer_meta: Joi.array().items(Joi.any()),
      created_by: ContentPublicModel.CreatedBySchema(),
      modified_by: ContentPublicModel.CreatedBySchema(),
      archived: Joi.boolean(),
      __v: Joi.number(),
    });
  }

  /** @returns {HomePageContentSchema} */
  static HomePageContentSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      created_by: ContentPublicModel.CreatedBySchema(),
      archived: Joi.boolean(),
      page_type: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {NavItemSchema} */
  static NavItemSchema() {
    return Joi.object({
      title: Joi.string().allow(""),
      link: Joi.string().allow(""),
      href: Joi.string().allow(""),
    });
  }

  /** @returns {NavbarSchema} */
  static NavbarSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      items: Joi.array().items(ContentPublicModel.NavItemSchema()),
      __v: Joi.number(),
      modified_by: ContentPublicModel.CreatedBySchema(),
    });
  }

  /** @returns {MediaSchema} */
  static MediaSchema() {
    return Joi.object({
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      alt: Joi.string().allow(""),
      anchor_link: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {PricingBannerSchema} */
  static PricingBannerSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      web_banner: ContentPublicModel.MediaSchema(),
      mobile_banner: ContentPublicModel.MediaSchema(),
      published: Joi.boolean(),
      created_by: ContentPublicModel.CreatedBySchema(),
      modified_by: ContentPublicModel.CreatedBySchema(),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {SdkReadmeSchema} */
  static SdkReadmeSchema() {
    return Joi.object({
      data: Joi.string().allow(""),
    });
  }

  /** @returns {TagsSchema} */
  static TagsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPublicModel.CustomItemSchema()),
      page: ContentPublicModel.PageSchema(),
    });
  }

  /** @returns {CustomItemSchema} */
  static CustomItemSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      position: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentPublicModel.UserSchema(),
      url: Joi.string().allow(""),
      content: Joi.string().allow(""),
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      current: Joi.number(),
      size: Joi.number(),
      item_total: Joi.number(),
      has_next: Joi.boolean(),
    });
  }

  /** @returns {UserSchema} */
  static UserSchema() {
    return Joi.object({
      user_id: Joi.string().allow(""),
    });
  }

  /** @returns {CredentialSchema} */
  static CredentialSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      configuration: ContentPublicModel.ConfigurationSchema(),
      entity_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      is_enable: Joi.boolean(),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {ConfigurationSchema} */
  static ConfigurationSchema() {
    return Joi.object({
      token: Joi.string().allow(""),
      host: Joi.string().allow(""),
    });
  }

  /** @returns {CredentialsSchema} */
  static CredentialsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentPublicModel.CredentialSchema()),
    });
  }

  /** @returns {ContentAPIError} */
  static ContentAPIError() {
    return Joi.object({
      message: Joi.string().allow(""),
      status: Joi.number(),
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      meta: Joi.any(),
    });
  }
}
module.exports = ContentPublicModel;
