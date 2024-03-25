const Joi = require("joi");

/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {number} [__v]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [additional_sitemap]
 * @property {SEOSitemap} [sitemap]
 * @property {boolean} [cannonical_enabled]
 * @property {CustomMetaTag[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */

/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image_url]
 */

/**
 * @typedef SeoSchemaComponent
 * @property {SEOSchemaMarkupTemplate[]} [items]
 */

/**
 * @typedef SEOSchemaMarkupTemplate
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [page_type]
 * @property {string} [description]
 * @property {string} [schema]
 * @property {Object} [target_json]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [application]
 * @property {number} [__v]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
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
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [publish_date]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 * @property {SEOMetaItem[]} [meta_tags]
 * @property {SEOSitemap} [sitemap]
 * @property {SEObreadcrumb[]} [breadcrumbs]
 * @property {string} [canonical_url]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef SEOMetaItem
 * @property {string} [title]
 * @property {SEOMetaItems[]} [items]
 */

/**
 * @typedef SEOMetaItems
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef SEOSitemap
 * @property {number} [priority]
 * @property {string} [frequency]
 */

/**
 * @typedef SEObreadcrumb
 * @property {string} [url]
 * @property {Action} [action]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate] - Number of seconds after which api should
 *   hit again to fetch new announcements
 * @property {string[]} [refresh_pages] - List of page slugs on which
 *   announcement should be fetched as soon as they are loaded
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {boolean} [is_selected]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {number} [__v]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
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

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 * @property {number} [__v]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 * @property {number} [__v]
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 * @property {number} [__v]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
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
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 * @property {number} [__v]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 * @property {number} [__v]
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids] - Components can be used to store
 *   multiple components
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 * @property {number} [__v]
 * @property {SanitizedContent[]} [sanitized_content]
 */

/**
 * @typedef SanitizedContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
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
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {TagSchema[]} [tags]
 * @property {number} [__v]
 */

/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string[]} [compatible_engines]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef CustomObjectListItemDefinationSchema
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [display_name_key]
 */

/**
 * @typedef CustomObjectFieldSchema
 * @property {string} [_id]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [definition_id]
 */

/**
 * @typedef CustomObjectByIdSchema
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [slug]
 * @property {string} [display_name]
 * @property {CustomObjectListItemDefinationSchema} [definition]
 * @property {Object[]} [references]
 * @property {CustomObjectFieldSchema[]} [fields]
 */

/**
 * @typedef CustomFieldSchema
 * @property {string} [_id]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [resource]
 * @property {string} [creator]
 * @property {string} [resource_id]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [definition_id]
 * @property {boolean} [has_invalid_values]
 * @property {Object[]} [invalid_value_errors]
 * @property {string} [created_by]
 * @property {boolean} [is_deleted]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomFieldsResponseByResourceIdSchema
 * @property {CustomFieldSchema[]} [items]
 */

/**
 * @typedef FieldValidations
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef FieldDefinitionSchema
 * @property {string} [_id]
 * @property {string} [creator]
 * @property {string} [resource]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {FieldValidations[]} [validations]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [created_by]
 * @property {string} [updated_by]
 * @property {boolean} [required]
 * @property {boolean} [is_deleted]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [type_name]
 * @property {number} [invalid_fields_count]
 */

/**
 * @typedef CustomFieldDefinitionsSchema
 * @property {FieldDefinitionSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFieldDefinitionDetailResSchema
 * @property {string} [creator]
 * @property {string} [resource]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [key]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [multi_value]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [created_by]
 * @property {string} [updated_by]
 * @property {boolean} [required]
 * @property {boolean} [is_deleted]
 * @property {string} [_id]
 * @property {Object[]} [validations]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

class ContentApplicationModel {
  /** @returns {ApplicationLegal} */
  static ApplicationLegal() {
    return Joi.object({
      application: Joi.string().allow(""),
      tnc: Joi.string().allow(""),
      policy: Joi.string().allow(""),
      shipping: Joi.string().allow(""),
      returns: Joi.string().allow(""),
      faq: Joi.array().items(ContentApplicationModel.ApplicationLegalFAQ()),
      _id: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {ApplicationLegalFAQ} */
  static ApplicationLegalFAQ() {
    return Joi.object({
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
    });
  }

  /** @returns {SeoComponent} */
  static SeoComponent() {
    return Joi.object({
      seo: ContentApplicationModel.SeoSchema(),
    });
  }

  /** @returns {SeoSchema} */
  static SeoSchema() {
    return Joi.object({
      app: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      robots_txt: Joi.string().allow(""),
      sitemap_enabled: Joi.boolean(),
      additional_sitemap: Joi.string().allow(""),
      sitemap: ContentApplicationModel.SEOSitemap(),
      cannonical_enabled: Joi.boolean(),
      custom_meta_tags: Joi.array().items(
        ContentApplicationModel.CustomMetaTag()
      ),
      details: ContentApplicationModel.Detail(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {CustomMetaTag} */
  static CustomMetaTag() {
    return Joi.object({
      name: Joi.string().allow(""),
      content: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {Detail} */
  static Detail() {
    return Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      image_url: Joi.string().allow(""),
    });
  }

  /** @returns {SeoSchemaComponent} */
  static SeoSchemaComponent() {
    return Joi.object({
      items: Joi.array().items(
        ContentApplicationModel.SEOSchemaMarkupTemplate()
      ),
    });
  }

  /** @returns {SEOSchemaMarkupTemplate} */
  static SEOSchemaMarkupTemplate() {
    return Joi.object({
      _id: Joi.string().allow(""),
      title: Joi.string().allow(""),
      page_type: Joi.string().allow(""),
      description: Joi.string().allow(""),
      schema: Joi.string().allow(""),
      target_json: Joi.object().pattern(/\S/, Joi.any()),
      active: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      application: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {ScheduleSchema} */
  static ScheduleSchema() {
    return Joi.object({
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
      duration: Joi.number(),
      next_schedule: Joi.array().items(ContentApplicationModel.NextSchedule()),
    });
  }

  /** @returns {NextSchedule} */
  static NextSchedule() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementSchema} */
  static AnnouncementSchema() {
    return Joi.object({
      announcement: Joi.string().allow(""),
      schedule: ContentApplicationModel.ScheduleStartSchema(),
    });
  }

  /** @returns {ScheduleStartSchema} */
  static ScheduleStartSchema() {
    return Joi.object({
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
    });
  }

  /** @returns {BlogGetResponse} */
  static BlogGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.BlogSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {ResourceContent} */
  static ResourceContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
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

  /** @returns {BlogSchema} */
  static BlogSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      _custom_json: Joi.any(),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      author: ContentApplicationModel.Author(),
      content: Joi.array().items(ContentApplicationModel.ResourceContent()),
      feature_image: ContentApplicationModel.Asset(),
      published: Joi.boolean(),
      reading_time: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      publish_date: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      _schedule: ContentApplicationModel.CronSchedule(),
      title: Joi.string().allow(""),
      date_meta: ContentApplicationModel.DateMeta(),
    });
  }

  /** @returns {SEO} */
  static SEO() {
    return Joi.object({
      description: Joi.string().allow(""),
      image: ContentApplicationModel.SEOImage(),
      title: Joi.string().allow(""),
      meta_tags: Joi.array().items(ContentApplicationModel.SEOMetaItem()),
      sitemap: ContentApplicationModel.SEOSitemap(),
      breadcrumbs: Joi.array().items(ContentApplicationModel.SEObreadcrumb()),
      canonical_url: Joi.string().allow(""),
    });
  }

  /** @returns {SEOImage} */
  static SEOImage() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  /** @returns {SEOMetaItem} */
  static SEOMetaItem() {
    return Joi.object({
      title: Joi.string().allow(""),
      items: Joi.array().items(ContentApplicationModel.SEOMetaItems()),
    });
  }

  /** @returns {SEOMetaItems} */
  static SEOMetaItems() {
    return Joi.object({
      key: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SEOSitemap} */
  static SEOSitemap() {
    return Joi.object({
      priority: Joi.number(),
      frequency: Joi.string().allow(""),
    });
  }

  /** @returns {SEObreadcrumb} */
  static SEObreadcrumb() {
    return Joi.object({
      url: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
    });
  }

  /** @returns {DateMeta} */
  static DateMeta() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {LocaleLanguage} */
  static LocaleLanguage() {
    return Joi.object({
      hi: ContentApplicationModel.Language(),
      ar: ContentApplicationModel.Language(),
      en_us: ContentApplicationModel.Language(),
    });
  }

  /** @returns {Language} */
  static Language() {
    return Joi.object({
      display: Joi.string().allow(""),
    });
  }

  /** @returns {Action} */
  static Action() {
    return Joi.object({
      page: ContentApplicationModel.ActionPage(),
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
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {NavigationReference} */
  static NavigationReference() {
    return Joi.object({
      acl: Joi.array().items(Joi.string().allow("")),
      tags: Joi.array().items(Joi.string().allow("")),
      _locale_language: ContentApplicationModel.LocaleLanguage(),
      image: Joi.string().allow(""),
      type: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
      active: Joi.boolean(),
      display: Joi.string().allow(""),
      sort_order: Joi.number(),
      sub_navigation: Joi.array().items(Joi.link("#NavigationReference")),
    }).id("NavigationReference");
  }

  /** @returns {AnnouncementsResponseSchema} */
  static AnnouncementsResponseSchema() {
    return Joi.object({
      announcements: Joi.object().pattern(
        /\S/,
        Joi.array().items(ContentApplicationModel.AnnouncementSchema())
      ),
      refresh_rate: Joi.number(),
      refresh_pages: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FaqResponseSchema} */
  static FaqResponseSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentApplicationModel.FaqSchema()),
    });
  }

  /** @returns {DataLoaderSchema} */
  static DataLoaderSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      service: Joi.string().allow(""),
      operation_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      is_selected: Joi.boolean(),
      created_at: Joi.string().allow(""),
      modified_at: Joi.string().allow(""),
      company: Joi.string().allow(""),
      application: Joi.string().allow(""),
      url: Joi.string().allow(""),
      content: Joi.string().allow(""),
      __source: ContentApplicationModel.DataLoaderSourceSchema(),
      _id: Joi.string().allow(""),
      __v: Joi.number(),
    });
  }

  /** @returns {DataLoaderSourceSchema} */
  static DataLoaderSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {DataLoadersSchema} */
  static DataLoadersSchema() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.DataLoaderSchema()),
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

  /** @returns {CommonError} */
  static CommonError() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {CategorySchema} */
  static CategorySchema() {
    return Joi.object({
      index: Joi.number(),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      children: Joi.array().items(Joi.string().allow("")),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      _custom_json: Joi.any(),
      __v: Joi.number(),
    });
  }

  /** @returns {ChildrenSchema} */
  static ChildrenSchema() {
    return Joi.object({
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
    });
  }

  /** @returns {FAQCategorySchema} */
  static FAQCategorySchema() {
    return Joi.object({
      index: Joi.number(),
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      children: Joi.array().items(ContentApplicationModel.ChildrenSchema()),
      _id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      icon_url: Joi.string().allow(""),
      _custom_json: Joi.any(),
      __v: Joi.number(),
    });
  }

  /** @returns {FaqSchema} */
  static FaqSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      question: Joi.string().allow(""),
      answer: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      __v: Joi.number(),
    });
  }

  /** @returns {GetFaqSchema} */
  static GetFaqSchema() {
    return Joi.object({
      faqs: Joi.array().items(ContentApplicationModel.FaqSchema()),
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

  /** @returns {LandingPageSchema} */
  static LandingPageSchema() {
    return Joi.object({
      slug: Joi.string().allow(""),
      action: ContentApplicationModel.Action(),
      platform: Joi.array().items(Joi.string().allow("")),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      _custom_json: Joi.any(),
      __v: Joi.number(),
    });
  }

  /** @returns {NavigationGetResponse} */
  static NavigationGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.NavigationSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {Orientation} */
  static Orientation() {
    return Joi.object({
      portrait: Joi.array().items(Joi.string().allow("")),
      landscape: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {NavigationSchema} */
  static NavigationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      archived: Joi.boolean(),
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      platform: Joi.array().items(Joi.string().allow("")),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      orientation: ContentApplicationModel.Orientation(),
      version: Joi.number(),
      navigation: Joi.array().items(
        ContentApplicationModel.NavigationReference()
      ),
      __v: Joi.number(),
    });
  }

  /** @returns {PageGetResponse} */
  static PageGetResponse() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.PageSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {PageSchema} */
  static PageSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      application: Joi.string().allow(""),
      component_ids: Joi.array().items(Joi.string().allow("")),
      content: Joi.array().items(Joi.any()),
      content_path: Joi.string().allow(""),
      created_by: ContentApplicationModel.CreatedBySchema(),
      date_meta: ContentApplicationModel.DateMeta(),
      description: Joi.string().allow(""),
      feature_image: ContentApplicationModel.Asset(),
      page_meta: Joi.array().items(Joi.any()),
      _schedule: ContentApplicationModel.ScheduleSchema(),
      _custom_json: Joi.any(),
      orientation: Joi.string().allow(""),
      platform: Joi.string().allow(""),
      published: Joi.boolean(),
      slug: Joi.string().allow(""),
      tags: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow(""),
      type: Joi.string().allow(""),
      seo: ContentApplicationModel.SEO(),
      visibility: Joi.any(),
      archived: Joi.boolean(),
      __v: Joi.number(),
      sanitized_content: Joi.array().items(
        ContentApplicationModel.SanitizedContent()
      ),
    });
  }

  /** @returns {SanitizedContent} */
  static SanitizedContent() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBySchema} */
  static CreatedBySchema() {
    return Joi.object({
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CronSchedule} */
  static CronSchedule() {
    return Joi.object({
      cron: Joi.string().allow(""),
      start: Joi.string().allow(""),
      end: Joi.string().allow(""),
      duration: Joi.number(),
      next_schedule: Joi.array().items(ContentApplicationModel.NextSchedule()),
    });
  }

  /** @returns {Support} */
  static Support() {
    return Joi.object({
      created: Joi.boolean(),
      _id: Joi.string().allow(""),
      config_type: Joi.string().allow(""),
      application: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      contact: ContentApplicationModel.ContactSchema(),
    });
  }

  /** @returns {PhoneProperties} */
  static PhoneProperties() {
    return Joi.object({
      key: Joi.string().allow(""),
      code: Joi.string().allow(""),
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

  /** @returns {ContactSchema} */
  static ContactSchema() {
    return Joi.object({
      phone: ContentApplicationModel.PhoneSchema(),
      email: ContentApplicationModel.EmailSchema(),
    });
  }

  /** @returns {TagsSchema} */
  static TagsSchema() {
    return Joi.object({
      application: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      company: Joi.string().allow(""),
      tags: Joi.array().items(ContentApplicationModel.TagSchema()),
      __v: Joi.number(),
    });
  }

  /** @returns {TagSchema} */
  static TagSchema() {
    return Joi.object({
      name: Joi.string().allow(""),
      url: Joi.string().allow(""),
      type: Joi.string().allow(""),
      sub_type: Joi.string().allow(""),
      _id: Joi.string().allow(""),
      position: Joi.string().allow(""),
      attributes: Joi.any(),
      content: Joi.string().allow(""),
      compatible_engines: Joi.array().items(Joi.string().allow("")),
      pages: Joi.array().items(Joi.any()),
      __source: ContentApplicationModel.TagSourceSchema(),
    });
  }

  /** @returns {TagSourceSchema} */
  static TagSourceSchema() {
    return Joi.object({
      type: Joi.string().allow(""),
      id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectListItemDefinationSchema} */
  static CustomObjectListItemDefinationSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
      display_name_key: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectFieldSchema} */
  static CustomObjectFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      key: Joi.string().allow(""),
      type: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
    });
  }

  /** @returns {CustomObjectByIdSchema} */
  static CustomObjectByIdSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      definition: ContentApplicationModel.CustomObjectListItemDefinationSchema(),
      references: Joi.array().items(Joi.any()),
      fields: Joi.array().items(
        ContentApplicationModel.CustomObjectFieldSchema()
      ),
    });
  }

  /** @returns {CustomFieldSchema} */
  static CustomFieldSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      resource_id: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      definition_id: Joi.string().allow(""),
      has_invalid_values: Joi.boolean(),
      invalid_value_errors: Joi.array().items(Joi.any()),
      created_by: Joi.string().allow(""),
      is_deleted: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }

  /** @returns {CustomFieldsResponseByResourceIdSchema} */
  static CustomFieldsResponseByResourceIdSchema() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.CustomFieldSchema()),
    });
  }

  /** @returns {FieldValidations} */
  static FieldValidations() {
    return Joi.object({
      name: Joi.string().allow(""),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {FieldDefinitionSchema} */
  static FieldDefinitionSchema() {
    return Joi.object({
      _id: Joi.string().allow(""),
      creator: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      validations: Joi.array().items(
        ContentApplicationModel.FieldValidations()
      ),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      type_name: Joi.string().allow(""),
      invalid_fields_count: Joi.number(),
    });
  }

  /** @returns {CustomFieldDefinitionsSchema} */
  static CustomFieldDefinitionsSchema() {
    return Joi.object({
      items: Joi.array().items(ContentApplicationModel.FieldDefinitionSchema()),
      page: ContentApplicationModel.Page(),
    });
  }

  /** @returns {CustomFieldDefinitionDetailResSchema} */
  static CustomFieldDefinitionDetailResSchema() {
    return Joi.object({
      creator: Joi.string().allow(""),
      resource: Joi.string().allow(""),
      name: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      key: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      multi_value: Joi.boolean(),
      company_id: Joi.string().allow(""),
      application_id: Joi.string().allow(""),
      created_by: Joi.string().allow(""),
      updated_by: Joi.string().allow(""),
      required: Joi.boolean(),
      is_deleted: Joi.boolean(),
      _id: Joi.string().allow(""),
      validations: Joi.array().items(Joi.any()),
      created_at: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
    });
  }
}
module.exports = ContentApplicationModel;
