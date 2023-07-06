const Joi = require("joi");

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {PageType} type
 * @property {string} [url]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [announcement]
 * @property {string} [app]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {EditorMeta} [editor_meta]
 * @property {string} [modified_at]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {string[]} [platforms]
 * @property {string} [title]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {string[]} [refresh_pages] - List of page slugs on which
 *   announcement should be fetched as soon as they are loaded
 * @property {number} [refresh_rate] - Number of seconds after which api should
 *   hit again to fetch new announcements
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [policy]
 * @property {string} [returns]
 * @property {string} [shipping]
 * @property {string} [tnc]
 * @property {string} [updated_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [answer]
 * @property {string} [question]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BlogRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */

/**
 * @typedef BlogSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {DateMeta} [date_meta]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef CategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [duration]
 * @property {number} [sleep_time]
 * @property {string} [slide_direction]
 * @property {boolean} [start_on_launch]
 */

/**
 * @typedef ContactSchema
 * @property {EmailSchema} [email]
 * @property {PhoneSchema} [phone]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */

/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {AdminAnnouncementSchema} [data]
 * @property {string} [message]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */

/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 */

/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */

/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef DataLoaderSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef Detail
 * @property {string} [description]
 * @property {string} [image_url]
 * @property {string} [title]
 */

/**
 * @typedef EditorMeta
 * @property {string} [background_color]
 * @property {string} [content]
 * @property {string} [content_type]
 * @property {string} [foreground_color]
 */

/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */

/**
 * @typedef FAQ
 * @property {string} [answer]
 * @property {string} [question]
 * @property {string} [slug]
 */

/**
 * @typedef FAQCategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef FaqSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 * @property {string[]} [tags]
 */

/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {Action} [action]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [ar]
 * @property {Language} [en_us]
 * @property {Language} [hi]
 */

/**
 * @typedef Navigation
 * @property {string} [_id]
 * @property {string} [application]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference} [navigation]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {string} [position]
 * @property {string} [slug]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef NavigationReference
 * @property {LocaleLanguage} [_locale_language]
 * @property {string[]} [acl]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {string} [image]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 * @property {string[]} [tags]
 * @property {string} [type]
 */

/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 * @property {number} [version]
 */

/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef Orientation
 * @property {string[]} [landscape]
 * @property {string[]} [portrait]
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
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PageMetaSchema
 * @property {string} [application_id]
 * @property {PageSchema[]} [custom_pages]
 * @property {NavigationSchema[]} [system_pages]
 */

/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */

/**
 * @typedef PageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {Object[]} [page_meta]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [visibility]
 */

/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [display_name]
 * @property {string} [page_type]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PathMappingSchema
 * @property {PathSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 */

/**
 * @typedef PathSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [code]
 * @property {string} [key]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef SeoSchema
 * @property {string} [_id]
 * @property {string} [app]
 * @property {boolean} [cannonical_enabled]
 * @property {string} [created_at]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [updated_at]
 */

/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowMedia
 * @property {Action} [action]
 * @property {boolean} [auto_decide_duration]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef SlideshowRequest
 * @property {boolean} [active]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef SlideshowSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {ConfigurationSchema} [configuration]
 * @property {DateMeta} [date_meta]
 * @property {SlideshowMedia[]} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */

/**
 * @typedef Support
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [config_type]
 * @property {ContactSchema} [contact]
 * @property {boolean} [created]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef TagSchema
 * @property {TagSourceSchema} [__source]
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef TagsSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef {| "about-us"
 *   | "addresses"
 *   | "blog"
 *   | "brands"
 *   | "cards"
 *   | "cart"
 *   | "categories"
 *   | "brand"
 *   | "category"
 *   | "collection"
 *   | "collections"
 *   | "contact-us"
 *   | "external"
 *   | "faq"
 *   | "freshchat"
 *   | "home"
 *   | "notification-settings"
 *   | "orders"
 *   | "page"
 *   | "policy"
 *   | "product"
 *   | "product-request"
 *   | "products"
 *   | "profile"
 *   | "profile-order-shipment"
 *   | "profile-basic"
 *   | "profile-company"
 *   | "profile-emails"
 *   | "profile-phones"
 *   | "rate-us"
 *   | "refer-earn"
 *   | "settings"
 *   | "shared-cart"
 *   | "tnc"
 *   | "track-order"
 *   | "wishlist"
 *   | "sections"
 *   | "form"
 *   | "cart-delivery"
 *   | "cart-payment"
 *   | "cart-review"
 *   | "login"
 *   | "register"
 *   | "shipping-policy"
 *   | "return-policy"
 *   | "order-status"} PageType
 */

class ContentApplicationModel {
  /** @returns {Action} */
  static Action() {
    return Joi.object({
      page: ContentApplicationModel.ActionPage(),
      popup: ContentApplicationModel.ActionPage(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {ActionPage} */
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
      type: ContentApplicationModel.PageType().required(),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {AdminAnnouncementSchema} */
  static AdminAnnouncementSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: ContentApplicationModel.ScheduleSchema(),
      announcement: Joi.string().allow(""),
      app: Joi.string().allow(""),
      author: ContentApplicationModel.AnnouncementAuthorSchema(),
      created_at: Joi.string().allow(""),
      editor_meta: ContentApplicationModel.EditorMeta(),
      modified_at: Joi.string().allow(""),
      pages: Joi.array().items(
        ContentApplicationModel.AnnouncementPageSchema()
      ),
      platforms: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementAuthorSchema} */
  static AnnouncementAuthorSchema() {
    return Joi.object({
      created_by: Joi.string().allow(""),
      modified_by: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementPageSchema} */
  static AnnouncementPageSchema() {
    return Joi.object({
      page_slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementSchema} */
  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),
      schedule: ContentApplicationModel.ScheduleStartSchema(),
    });
  }

  /** @returns {AnnouncementsResponseSchema} */
  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object().pattern(
        /\S/,
        Joi.array().items(ContentApplicationModel.AnnouncementSchema())
      ),
      refresh_pages: Joi.array().items(Joi.string().allow("")),
      refresh_rate: Joi.number(),
    });
  }

  /** @returns {ApplicationLegal} */
  static ApplicationLegal() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      faq: Joi.array().items(ContentApplicationModel.ApplicationLegalFAQ()),
      policy: Joi.string().allow(""),
      returns: Joi.string().allow(""),
      shipping: Joi.string().allow(""),
      tnc: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {ApplicationLegalFAQ} */
  static ApplicationLegalFAQ() {
    return Joi.object({
      answer: Joi.string().allow(""),
      question: Joi.string().allow(""),
    });
  }

  /** @returns {Asset} */
  static Asset() {
    return Joi.object({
      aspect_ratio: Joi.string().allow(""),
      id: Joi.string().allow(""),
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {Author} */
  static Author() {
    return Joi.object({
      designation: Joi.string().allow(""),
      id: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {BlogGetResponse} */
  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.BlogSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {BlogRequest} */
  static BlogRequest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: ContentApplicationModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentApplicationModel.Author(),
      content: Joi.array().items(ContentApplicationModel.ResourceContent()),
      feature_image: ContentApplicationModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {BlogSchema} */
  static BlogSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: ContentApplicationModel.CronSchedule(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      author: ContentApplicationModel.Author(),
      content: Joi.array().items(ContentApplicationModel.ResourceContent()),
      date_meta: ContentApplicationModel.DateMeta(),
      feature_image: ContentApplicationModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {CategoryRequestSchema} */
  static CategoryRequestSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {CategorySchema} */
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

  /** @returns {ChildrenSchema} */
  static ChildrenSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      application: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigurationSchema} */
  static ConfigurationSchema() {
    return Joi.object({
      duration: Joi.number(),
      sleep_time: Joi.number(),
      slide_direction: Joi.string().allow(""),
      start_on_launch: Joi.boolean(),
    });
  }

  /** @returns {ContactSchema} */
  static ContactSchema() {
    return Joi.object({
      email: ContentApplicationModel.EmailSchema(),
      phone: ContentApplicationModel.PhoneSchema(),
    });
  }

  /** @returns {ContentAPIError} */
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

  /** @returns {ContentSchema} */
  static ContentSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {CreateAnnouncementSchema} */
  static CreateAnnouncementSchema() {
    return Joi.object({
      data: ContentApplicationModel.AdminAnnouncementSchema(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CreateFaqCategoryRequestSchema} */
  static CreateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentApplicationModel.CategoryRequestSchema(),
    });
  }

  /** @returns {CreateFaqCategorySchema} */
  static CreateFaqCategorySchema() {
    return Joi.object({
      category: ContentApplicationModel.CategorySchema(),
    });
  }

  /** @returns {CreateFaqResponseSchema} */
  static CreateFaqResponseSchema() {
    return Joi.object({
      faq: ContentApplicationModel.FaqSchema(),
    });
  }

  /** @returns {CreateFaqSchema} */
  static CreateFaqSchema() {
    return Joi.object({
      faq: ContentApplicationModel.FAQ(),
    });
  }

  /** @returns {CreateTagRequestSchema} */
  static CreateTagRequestSchema() {
    return Joi.object({
      tags: Joi.array().items(ContentApplicationModel.CreateTagSchema()),
    });
  }

  /** @returns {CreateTagSchema} */
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

  /** @returns {CronSchedule} */
  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {CustomMetaTag} */
  static CustomMetaTag() {
    return Joi.object({
      _id: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {CustomPage} */
  static CustomPage() {
    return Joi.object({
      data: ContentApplicationModel.CustomPageSchema(),
    });
  }

  /** @returns {CustomPageSchema} */
  static CustomPageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _schedule: ContentApplicationModel.ScheduleSchema(),
      application: Joi.string().allow(""),
      content: Joi.array().items(Joi.any()),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
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

  /** @returns {DataLoaderResetResponseSchema} */
  static DataLoaderResetResponseSchema() {
    return Joi.object({
      reset: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoaderResponseSchema} */
  static DataLoaderResponseSchema() {
    return Joi.object({
      __source: ContentApplicationModel.DataLoaderSourceSchema(),
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

  /** @returns {DataLoaderSchema} */
  static DataLoaderSchema() {
    return Joi.object({
      __source: ContentApplicationModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
      content: Joi.string().allow(""),
      name: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      service: Joi.string().allow(""),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoaderSourceSchema} */
  static DataLoaderSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoadersSchema} */
  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.DataLoaderSchema()),
    });
  }

  /** @returns {DateMeta} */
  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {DefaultNavigationResponse} */
  static DefaultNavigationResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.NavigationSchema()),
    });
  }

  /** @returns {Detail} */
  static Detail() {
    return Joi.object({
      description: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {EditorMeta} */
  static EditorMeta() {
    return Joi.object({
      background_color: Joi.string().allow(""),
      content: Joi.string().allow(""),
      content_type: Joi.string().allow(""),
      foreground_color: Joi.string().allow(""),
    });
  }

  /** @returns {EmailProperties} */
  static EmailProperties() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {EmailSchema} */
  static EmailSchema() {
    return Joi.object({
      active: Joi.boolean(),
      email: Joi.array().items(ContentApplicationModel.EmailProperties()),
    });
  }

  /** @returns {FAQ} */
  static FAQ() {
    return Joi.object({
      answer: Joi.string().allow(""),
      question: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {FAQCategorySchema} */
  static FAQCategorySchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      children: Joi.array().items(ContentApplicationModel.ChildrenSchema()),
      description: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      index: Joi.number(),
      slug: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {FaqResponseSchema} */
  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentApplicationModel.FaqSchema()),
    });
  }

  /** @returns {FaqSchema} */
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

  /** @returns {FeatureImage} */
  static FeatureImage() {
    return Joi.object({
      secure_url: Joi.string().allow(""),
    });
  }

  /** @returns {GetAnnouncementListSchema} */
  static GetAnnouncementListSchema() {
    return Joi.object({
      items: Joi.array().items(
        ContentApplicationModel.AdminAnnouncementSchema()
      ),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {GetFaqCategoriesSchema} */
  static GetFaqCategoriesSchema() {
    return Joi.object({
      categories: Joi.array().items(ContentApplicationModel.CategorySchema()),
    });
  }

  /** @returns {GetFaqCategoryBySlugSchema} */
  static GetFaqCategoryBySlugSchema() {
    return Joi.object({
      category: ContentApplicationModel.FAQCategorySchema(),
    });
  }

  /** @returns {GetFaqSchema} */
  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentApplicationModel.FaqSchema()),
    });
  }

  /** @returns {HandpickedTagSchema} */
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

  /** @returns {LandingPage} */
  static LandingPage() {
    return Joi.object({
      data: ContentApplicationModel.LandingPageSchema(),
      success: Joi.boolean(),
    });
  }

  /** @returns {LandingPageGetResponse} */
  static LandingPageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.LandingPageSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {LandingPageSchema} */
  static LandingPageSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Language} */
  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }

  /** @returns {LocaleLanguage} */
  static LocaleLanguage() {
    return Joi.object({
      ar: ContentApplicationModel.Language(),
      en_us: ContentApplicationModel.Language(),
      hi: ContentApplicationModel.Language(),
    });
  }

  /** @returns {Navigation} */
  static Navigation() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      name: Joi.string().allow(""),
      navigation: ContentApplicationModel.NavigationReference(),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      position: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {NavigationGetResponse} */
  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.NavigationSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {NavigationReference} */
  static NavigationReference() {
    return Joi.object({
      _locale_language: ContentApplicationModel.LocaleLanguage(),
      acl: Joi.array().items(Joi.string().allow("")),
      action: ContentApplicationModel.Action(),
      active: Joi.boolean(),
      display: Joi.string().allow(""),
      image: Joi.string().allow(""),
      sort_order: Joi.number(),
      sub_navigation: Joi.array().items(Joi.link("#NavigationReference")),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    }).id("NavigationReference");
  }

  /** @returns {NavigationRequest} */
  static NavigationRequest() {
    return Joi.object({
      name: Joi.string().allow(""),
      navigation: Joi.array().items(
        ContentApplicationModel.NavigationReference()
      ),
      orientation: ContentApplicationModel.Orientation(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {NavigationSchema} */
  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      name: Joi.string().allow(""),
      navigation: Joi.array().items(
        ContentApplicationModel.NavigationReference()
      ),
      orientation: ContentApplicationModel.Orientation(),
      platform: Joi.array().items(Joi.string().allow("")),
      slug: Joi.string().allow(""),
      version: Joi.number(),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {Orientation} */
  static Orientation() {
    return Joi.object({
      landscape: Joi.array().items(Joi.string().allow("")),
      portrait: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {PageContent} */
  static PageContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PageGetResponse} */
  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.PageSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {PageMeta} */
  static PageMeta() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.any(),
    });
  }

  /** @returns {PageMetaSchema} */
  static PageMetaSchema() {
    return Joi.object({
      application_id: Joi.string().allow(""),
      custom_pages: Joi.array().items(ContentApplicationModel.PageSchema()),
      system_pages: Joi.array().items(
        ContentApplicationModel.NavigationSchema()
      ),
    });
  }

  /** @returns {PagePublishRequest} */
  static PagePublishRequest() {
    return Joi.object({
      publish: Joi.boolean(),
    });
  }

  /** @returns {PageRequest} */
  static PageRequest() {
    return Joi.object({
      _custom_json: Joi.any(),
      _schedule: ContentApplicationModel.CronSchedule(),
      application: Joi.string().allow(""),
      author: ContentApplicationModel.Author(),
      content: Joi.array().items(Joi.any()),
      feature_image: ContentApplicationModel.Asset(),
      orientation: Joi.string().allow(""),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      _schedule: ContentApplicationModel.ScheduleSchema(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      component_ids: Joi.array().items(Joi.string().allow("")),
      content: Joi.array().items(Joi.any()),
      content_path: Joi.string().allow(""),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      description: Joi.string().allow(""),
      feature_image: ContentApplicationModel.Asset(),
      orientation: Joi.string().allow(""),
      page_meta: Joi.array().items(Joi.any()),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      seo: ContentApplicationModel.SEO(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      visibility: Joi.any(),
    });
  }

  /** @returns {PageSpec} */
  static PageSpec() {
    return Joi.object({
      specifications: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {PageSpecItem} */
  static PageSpecItem() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      params: Joi.array().items(ContentApplicationModel.PageSpecParam()),
      query: Joi.array().items(ContentApplicationModel.PageSpecParam()),
    });
  }

  /** @returns {PageSpecParam} */
  static PageSpecParam() {
    return Joi.object({
      key: Joi.string().allow(""),
      required: Joi.boolean(),
    });
  }

  /** @returns {PathMappingSchema} */
  static PathMappingSchema() {
    return Joi.object({
      __source: ContentApplicationModel.PathSourceSchema(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      redirect_from: Joi.string().allow(""),
      redirect_to: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {PathSourceSchema} */
  static PathSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneProperties} */
  static PhoneProperties() {
    return Joi.object({
      code: Joi.string().allow(""),
      key: Joi.string().allow(""),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {PhoneSchema} */
  static PhoneSchema() {
    return Joi.object({
      active: Joi.boolean(),
      phone: Joi.array().items(ContentApplicationModel.PhoneProperties()),
    });
  }

  /** @returns {RemoveHandpickedSchema} */
  static RemoveHandpickedSchema() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {ResourceContent} */
  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ScheduleSchema} */
  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),
      duration: Joi.number(),
      end: Joi.string().allow(""),
      next_schedule: Joi.array().items(Joi.any()),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {ScheduleStartSchema} */
  static ScheduleStartSchema() {
    return Joi.object({
      end: Joi.string().allow(""),
      start: Joi.string().allow(""),
    });
  }

  /** @returns {SEO} */
  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: ContentApplicationModel.SEOImage(),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SeoComponent} */
  static SeoComponent() {
    return Joi.object({
      seo: ContentApplicationModel.SeoSchema(),
    });
  }

  /** @returns {SEOImage} */
  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SeoSchema} */
  static SeoSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      app: Joi.string().allow(""),
      cannonical_enabled: Joi.boolean(),
      created_at: Joi.string().allow(""),
      custom_meta_tags: Joi.array().items(Joi.any()),
      details: ContentApplicationModel.Detail(),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {Slideshow} */
  static Slideshow() {
    return Joi.object({
      data: ContentApplicationModel.SlideshowSchema(),
      success: Joi.boolean(),
    });
  }

  /** @returns {SlideshowGetResponse} */
  static SlideshowGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.SlideshowSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {SlideshowMedia} */
  static SlideshowMedia() {
    return Joi.object({
      action: ContentApplicationModel.Action(),
      auto_decide_duration: Joi.boolean(),
      bg_color: Joi.string().allow(""),
      duration: Joi.number(),
      type: Joi.string().allow(""),
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SlideshowRequest} */
  static SlideshowRequest() {
    return Joi.object({
      active: Joi.boolean(),
      configuration: ContentApplicationModel.ConfigurationSchema(),
      media: Joi.array().items(ContentApplicationModel.SlideshowMedia()),
      platform: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {SlideshowSchema} */
  static SlideshowSchema() {
    return Joi.object({
      _custom_json: Joi.any(),
      _id: Joi.string().allow(""),
      active: Joi.boolean(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      configuration: ContentApplicationModel.ConfigurationSchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      media: Joi.array().items(ContentApplicationModel.SlideshowMedia()),
      platform: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {Support} */
  static Support() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      config_type: Joi.string().allow(""),
      contact: ContentApplicationModel.ContactSchema(),
      created: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {TagDeleteSuccessResponse} */
  static TagDeleteSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  /** @returns {TagSchema} */
  static TagSchema() {
    return Joi.object({
      __source: ContentApplicationModel.TagSourceSchema(),
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

  /** @returns {TagSourceSchema} */
  static TagSourceSchema() {
    return Joi.object({
      id: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {TagsSchema} */
  static TagsSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      tags: Joi.array().items(ContentApplicationModel.TagSchema()),
    });
  }

  /** @returns {UpdateFaqCategoryRequestSchema} */
  static UpdateFaqCategoryRequestSchema() {
    return Joi.object({
      category: ContentApplicationModel.CategorySchema(),
    });
  }

  /** @returns {UpdateHandpickedSchema} */
  static UpdateHandpickedSchema() {
    return Joi.object({
      tag: ContentApplicationModel.HandpickedTagSchema(),
    });
  }

  /**
   * Enum: PageType Used By: Content
   *
   * @returns {PageType}
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
module.exports = ContentApplicationModel;
