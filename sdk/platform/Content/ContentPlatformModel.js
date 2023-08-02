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
  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: ContentModel.ScheduleSchema(),
      announcement: Joi.string().allow(""),
      app: Joi.string().allow(""),
      author: ContentModel.AnnouncementAuthorSchema(),
      created_at: Joi.string().allow(""),
      editor_meta: ContentModel.EditorMeta(),
      modified_at: Joi.string().allow(""),
      pages: Joi.array().items(ContentModel.AnnouncementPageSchema()),
      platforms: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }
  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }
  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
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
  static BlogRequest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: ContentModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentModel.Author(),
      content: Joi.array().items(ContentModel.ResourceContent()),
      feature_image: ContentModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
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
  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
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
  static ContentSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static CreateAnnouncementSchema() {
    return Joi.object({
      data: ContentModel.AdminAnnouncementSchema(),
      message: Joi.string().allow(""),
    });
  }
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }
  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentModel.CategoryRequestSchema(),
    });
  }
  static CreateFaqCategorySchema() {
    return Joi.object({
      category: ContentModel.CategorySchema(),
    });
  }
  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: ContentModel.FaqSchema(),
    });
  }
  static CreateFaqSchema() {
    return Joi.object({
      faq: ContentModel.FAQ(),
    });
  }
  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(ContentModel.CreateTagSchema()),
    });
  }
  static CreateTagSchema() {
    return Joi.object({
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
  static CustomPage() {
    return Joi.object({
      data: ContentModel.CustomPageSchema(),
    });
  }
  static CustomPageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: ContentModel.ScheduleSchema(),
      application: Joi.string().allow(""),
      content: Joi.array().items(Joi.any()),
      created_by: ContentModel.CreatedBySchema(),
      date_meta: ContentModel.DateMeta(),
      description: Joi.string().allow(""),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static DataLoaderResetResponseSchema() {
    return Joi.object({
      reset: Joi.string().allow(""),
    });
  }
  static DataLoaderResponseSchema() {
    return Joi.object({
      __source: ContentModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      company: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      service: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
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
  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.NavigationSchema()),
    });
  }
  static Detail() {
    return Joi.object({
      description: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static EditorMeta() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      content: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      foreground_color: Joi.string().allow(""),
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
  static FAQ() {
    return Joi.object({
      answer: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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
  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }
  static GeneratedSEOContent() {
    return Joi.object({
      description: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static GenerateSEOContent() {
    return Joi.object({
      existing_text: Joi.string().allow(""),
      keywords: Joi.array().items(Joi.string().allow("")),
      text: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }
  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(ContentModel.AdminAnnouncementSchema()),
      page: ContentModel.Page(),
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
  static HandpickedTagSchema() {
    return Joi.object({
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      position: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }
  static LandingPage() {
    return Joi.object({
      data: ContentModel.LandingPageSchema(),
      success: Joi.boolean(),
    });
  }
  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.LandingPageSchema()),
      page: ContentModel.Page(),
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
  static Navigation() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_by: ContentModel.CreatedBySchema(),
      date_meta: ContentModel.DateMeta(),
      name: Joi.string().allow(""),
      navigation: ContentModel.NavigationReference(),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      position: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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
  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),
      navigation: Joi.array().items(ContentModel.NavigationReference()),
      orientation: ContentModel.Orientation(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
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
  static PageContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentModel.PageSchema()),
      page: ContentModel.Page(),
    });
  }
  static PageMeta() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }
  static PageMetaSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      custom_pages: Joi.array().items(ContentModel.PageSchema()),
      system_pages: Joi.array().items(ContentModel.NavigationSchema()),
    });
  }
  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }
  static PageRequest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: ContentModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentModel.Author(),
      content: Joi.array().items(Joi.any()),
      feature_image: ContentModel.Asset(),
      orientation: Joi.string().allow(""),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
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
  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.any()),
    });
  }
  static PageSpecItem() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      params: Joi.array().items(ContentModel.PageSpecParam()),
      query: Joi.array().items(ContentModel.PageSpecParam()),
    });
  }
  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),
      required: Joi.boolean(),
    });
  }
  static PathMappingSchema() {
    return Joi.object({
      __source: ContentModel.PathSourceSchema(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
  static PathSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
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
  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
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
      next_schedule: Joi.array().items(Joi.any()),
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
      custom_meta_tags: Joi.array().items(Joi.any()),
      details: ContentModel.Detail(),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      updated_at: Joi.string().allow(""),
    });
  }
  static Slideshow() {
    return Joi.object({
      data: ContentModel.SlideshowSchema(),
      success: Joi.boolean(),
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
  static SlideshowRequest() {
    return Joi.object({
      active: Joi.boolean(),
      configuration: ContentModel.ConfigurationSchema(),
      media: ContentModel.SlideshowMedia(),
      platform: Joi.string().allow(""),
      slug: Joi.string().allow(""),
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
  static TagDeleteSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
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
  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentModel.CategorySchema(),
    });
  }
  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: ContentModel.HandpickedTagSchema(),
    });
  }

  /*
        Enum: GenerationEntityType
        Used By: Content
    */
  static GenerationEntityType() {
    return Joi.string().valid(
      "title",

      "description"
    );
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
