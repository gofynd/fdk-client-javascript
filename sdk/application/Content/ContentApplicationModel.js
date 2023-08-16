const Joi = require("joi");

class ContentModel {
  static Action() {
    return Joi.object({
      page: ContentModel.ActionPage(),
      popup: ContentModel.ActionPage(),
      type: Joi.string().allow(""),
    });
  }
  static ActionPage() {
    return Joi.object({
      params: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      query: Joi.object().pattern(
        /\S/,
        Joi.array().items(Joi.string().allow(""))
      ),
      type: ContentModel.PageType().required(),
      url: Joi.string().allow(""),
    });
  }
  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),
      schedule: ContentModel.ScheduleStartSchema(),
    });
  }
  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object().pattern(
        /\S/,
        Joi.array().items(ContentModel.AnnouncementSchema())
      ),
      refresh_pages: Joi.array().items(Joi.string().allow("")),
      refresh_rate: Joi.number(),
    });
  }
  static ApplicationLegal() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      faq: Joi.array().items(ContentModel.ApplicationLegalFAQ()),
      policy: Joi.string().allow(""),
      returns: Joi.string().allow(""),
      shipping: Joi.string().allow(""),
      tnc: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static ApplicationLegalFAQ() {
    return Joi.object({
      answer: Joi.string().allow(""),
      question: Joi.string().allow(""),
    });
  }
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }
  static Author() {
    return Joi.object({
      designation: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.BlogSchema()),
      page: ContentModel.Page(),
    });
  }
  static BlogSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: ContentModel.CronSchedule(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      author: ContentModel.Author(),
      content: Joi.array().items(ContentModel.ResourceContent()),
      date_meta: ContentModel.DateMeta(),
      feature_image: ContentModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }
  static CategorySchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      children: Joi.array().items(Joi.string().allow("")),
      description: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      index: Joi.number(),
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static ChildrenSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      application: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }
  static ConfigurationSchema() {
    return Joi.object({
      duration: Joi.number(),
      sleep_time: Joi.number(),
      slide_direction: Joi.string().allow(""),
      start_on_launch: Joi.boolean(),
    });
  }
  static ContactSchema() {
    return Joi.object({
      email: ContentModel.EmailSchema(),
      phone: ContentModel.PhoneSchema(),
    });
  }
  static ContentAPIError() {
    return Joi.object({
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      info: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      request_id: Joi.string().allow(""),
      stack_trace: Joi.string().allow(""),
      status: Joi.number(),
    });
  }
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }
  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static CustomMetaTag() {
    return Joi.object({
      _id: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }
  static DataLoaderSchema() {
    return Joi.object({
      __source: ContentModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      service: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static DataLoaderSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(ContentModel.DataLoaderSchema()),
    });
  }
  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }
  static Detail() {
    return Joi.object({
      description: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static EmailProperties() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.array().items(ContentModel.EmailProperties()),
    });
  }
  static FAQCategorySchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      children: Joi.array().items(ContentModel.ChildrenSchema()),
      description: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      index: Joi.number(),
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentModel.FaqSchema()),
    });
  }
  static FaqSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      application: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }
  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(ContentModel.CategorySchema()),
    });
  }
  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: ContentModel.FAQCategorySchema(),
    });
  }
  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentModel.FaqSchema()),
    });
  }
  static LandingPageSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      action: ContentModel.Action(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentModel.CreatedBySchema(),
      date_meta: ContentModel.DateMeta(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }
  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }
  static LocaleLanguage() {
    return Joi.object({
      ar: ContentModel.Language(),
      en_us: ContentModel.Language(),
      hi: ContentModel.Language(),
    });
  }
  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.NavigationSchema()),
      page: ContentModel.Page(),
    });
  }
  static NavigationReference() {
    return Joi.object({
      _locale_language: ContentModel.LocaleLanguage(),
      acl: Joi.array().items(Joi.string().allow("")),
      action: ContentModel.Action(),
      active: Joi.boolean(),
      display: Joi.string().allow(""),
      image: Joi.string().allow(""),
      sort_order: Joi.number(),
      sub_navigation: Joi.array().items(Joi.link("#NavigationReference")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    }).id("NavigationReference");
  }
  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentModel.CreatedBySchema(),
      date_meta: ContentModel.DateMeta(),
      name: Joi.string().allow(""),
      navigation: Joi.array().items(ContentModel.NavigationReference()),
      orientation: ContentModel.Orientation(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      version: Joi.number(),
    });
  }
  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static Orientation() {
    return Joi.object({
      landscape: Joi.array().items(Joi.string().allow("")),
      portrait: Joi.array().items(Joi.string().allow("")),
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
  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.PageSchema()),
      page: ContentModel.Page(),
    });
  }
  static PageSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: ContentModel.ScheduleSchema(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      component_ids: Joi.array().items(Joi.string().allow("")),
      content: Joi.array().items(Joi.any()),
      content_path: Joi.string().allow(""),
      created_by: ContentModel.CreatedBySchema(),
      date_meta: ContentModel.DateMeta(),
      description: Joi.string().allow(""),
      feature_image: ContentModel.Asset(),
      orientation: Joi.string().allow(""),
      page_meta: Joi.array().items(Joi.any()),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      seo: ContentModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      visibility: Joi.any(),
    });
  }
  static PhoneProperties() {
    return Joi.object({
      code: Joi.string().allow(""),
      key: Joi.string().allow(""),
      number: Joi.string().allow(""),
    });
  }
  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),
      phone: Joi.array().items(ContentModel.PhoneProperties()),
    });
  }
  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      next_schedule: Joi.array().items(ContentModel.NextSchedule()),
      start: Joi.string().allow(""),
    });
  }
  static ScheduleStartSchema() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }
  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: ContentModel.SEOImage(),
      title: Joi.string().allow(""),
    });
  }
  static SeoComponent() {
    return Joi.object({
      seo: ContentModel.SeoSchema(),
    });
  }
  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }
  static SeoSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      cannonical_enabled: Joi.boolean(),
      created_at: Joi.string().allow(""),
      custom_meta_tags: Joi.array().items(ContentModel.CustomMetaTag()),
      details: ContentModel.Detail(),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      updated_at: Joi.string().allow(""),
    });
  }
  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.SlideshowSchema()),
      page: ContentModel.Page(),
    });
  }
  static SlideshowMedia() {
    return Joi.object({
      action: ContentModel.Action(),
      auto_decide_duration: Joi.boolean(),
      bg_color: Joi.string().allow(""),
      duration: Joi.number(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static SlideshowSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      configuration: ContentModel.ConfigurationSchema(),
      date_meta: ContentModel.DateMeta(),
      media: Joi.array().items(ContentModel.SlideshowMedia()),
      platform: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }
  static Support() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      config_type: Joi.string().allow(""),
      contact: ContentModel.ContactSchema(),
      created: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static TagSchema() {
    return Joi.object({
      __source: ContentModel.TagSourceSchema(),
      _id: Joi.string().allow(""),
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      pages: Joi.array().items(Joi.any()),
      position: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static TagSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static TagsSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      tags: Joi.array().items(ContentModel.TagSchema()),
    });
  }

  /*
        Enum: PageType
        Used By: Content
    */
  static PageType() {
    return Joi.string().valid(
      "about-us",

      "addresses",

      "blog",

      "brands",

      "cards",

      "cart",

      "categories",

      "brand",

      "category",

      "collection",

      "collections",

      "contact-us",

      "external",

      "faq",

      "freshchat",

      "home",

      "notification-settings",

      "orders",

      "page",

      "policy",

      "product",

      "product-request",

      "products",

      "profile",

      "profile-order-shipment",

      "profile-basic",

      "profile-company",

      "profile-emails",

      "profile-phones",

      "rate-us",

      "refer-earn",

      "settings",

      "shared-cart",

      "tnc",

      "track-order",

      "wishlist",

      "sections",

      "form",

      "cart-delivery",

      "cart-payment",

      "cart-review",

      "login",

      "register",

      "shipping-policy",

      "return-policy",

      "order-status"
    );
  }
}
module.exports = ContentModel;
